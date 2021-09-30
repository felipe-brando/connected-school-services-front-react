// == Import
import PropTypes from 'prop-types';

// == Composant
const ResourcesList = ({ title, content, handleTitleClick, accordionIsOpen }) => {


    return (
        <div className="resources-list">
            <h3 onClick={handleTitleClick} className={accordionIsOpen ? "resources__title open" : "resources__title" }>
                {title}
                <div className="resouces__arrow arrow-open">►</div>
            </h3>
            <div className="resources__content">
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
};



ResourcesList.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired, 
    handleTitleClick: PropTypes.func.isRequired,
    accordionIsOpen: PropTypes.bool.isRequired,
}

// == Export
export default ResourcesList;