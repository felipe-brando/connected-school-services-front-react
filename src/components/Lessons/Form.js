// == Import
import PropTypes from 'prop-types';

import DisciplinesList from './DisciplinesList';

import './style.scss';

// == Composant
const Form = ({disciplines, handleChangeDiscipline }) => {
    return (
        <form>
            <select onChange={handleChangeDiscipline}>
                {disciplines.map((discipline) => (
                    <DisciplinesList key={discipline.id} {...discipline} />
                ))}
            </select>
        </form>
    )
};


Form.propTypes = {
    disciplines: PropTypes.array.isRequired,
    handleChangeDiscipline: PropTypes.func.isRequired,
};



// == Export
export default Form ;