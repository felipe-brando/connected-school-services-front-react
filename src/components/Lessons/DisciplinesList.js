// == Import
import PropTypes from 'prop-types';

// == Composant
const DisciplinesList = ({ name }) => {

    return (
        <>  
            <option value={name}>{name}</option>

        </>
    )
};

DisciplinesList.propTypes = {
    name: PropTypes.string.isRequired,
}

// == Export
export default DisciplinesList ;