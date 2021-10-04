// == Import
import PropTypes from 'prop-types';

import { Trash, Edit } from 'react-feather';
import EditResources from './EditResources';
//TODO INSTALL DOM PURIFY
// == Composant
const ResourcesList = ({ 
    id,
    title, 
    content, 
    handleTitleClick, 
    isSelected, 
    index,
    roleTeacher,
    isEditResourceOpen,
    handleEditResources
}) => {
    return (
        <div className="resource__item">
            <div className="resource__header">
            <div id={index} className="resource__title" onClick={handleTitleClick}>
                <h3>{title}</h3>
                <div>{isSelected === index ? '-' : '+'}</div>  
            </div>
            {roleTeacher &&
                <>
                    <button type="button" onClick={handleEditResources}><Edit /></button>
                    <button type="button"><Trash /></button>
                </>
            }
            </div>
            <div className="resource__overflow">
             {isSelected === index && 
                <>
                {!isEditResourceOpen &&
                <div className="resource__content" dangerouslySetInnerHTML={{__html: content}} />
                }
                {isEditResourceOpen &&
                <EditResources 
                    currentTitle={title} 
                    currentContent={content} 
                    currentId={id}
                />
                }
                </>
             }
            </div>
            
            
        </div>
    )
};



ResourcesList.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired, 
    handleTitleClick: PropTypes.func.isRequired,
    isSelected: PropTypes.number,
}

// == Export
export default ResourcesList;