// == Import
import PropTypes from 'prop-types';

// == Composant
const ResourcesList = ({ title, content }) => {

    return (
        <div className="resources-list">
            <h3 className="resources__title open">
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
}

// == Export
export default ResourcesList;