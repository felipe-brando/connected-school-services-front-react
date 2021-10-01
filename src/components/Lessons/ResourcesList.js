// == Import
import PropTypes from 'prop-types';

// == Composant
const ResourcesList = ({ title, content, handleTitleClick, isSelected, index }) => {
    return (
        <div className="resource__item">
            <div id={index} className="resource__title" onClick={handleTitleClick}>
                <h3>{title}</h3>
                <div>{isSelected === index ? '-' : '+'}</div>
            </div>
            <div className="resource__overflow">
             {isSelected === index && <div className="resource__content">{content}</div> }
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