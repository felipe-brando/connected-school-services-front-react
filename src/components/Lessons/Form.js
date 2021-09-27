// == Import
import PropTypes from 'prop-types';

import DisciplinesList from './DisciplinesList';

import './style.scss';

// == Composant
const Form = ({disciplines}) => {
    return (
        <form>
            <select name="lessons" id="lessons">
                {disciplines.map((discipline) => (
                    <DisciplinesList key={discipline.id} {...discipline} />
                ))}
            </select>
        </form>
    )
};


Form.propTypes = {
    disciplines: PropTypes.array.isRequired,
};



// == Export
export default Form ;