// == Import
import PropTypes from 'prop-types';

import { Trash, Edit } from 'react-feather';
//TODO INSTALL DOMP PURIFY
// == Composant
const ResourcesList = ({ 
    title, 
    content, 
    handleTitleClick, 
    isSelected, 
    index,
    roleTeacher, }) => {
    return (
        <div className="resource__item">
            <div className="resource__header">
            <div id={index} className="resource__title" onClick={handleTitleClick}>
                <h3>{title}</h3>
                <div>{isSelected === index ? '-' : '+'}</div>  
            </div>
            {roleTeacher &&
                <>
                    <button><Edit /></button>
                    <button><Trash /></button>
                </>
            }
            </div>
            <div className="resource__overflow">
             {isSelected === index && <div className="resource__content" dangerouslySetInnerHTML={{__html: content}} />}
            </div>
            
            
        </div>
    )
};



ResourcesList.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired, 
    handleTitleClick: PropTypes.func.isRequired,
    isSelected: PropTypes.number.isRequired,
}

// == Export
export default ResourcesList;