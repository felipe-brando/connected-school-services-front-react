// == Import
import PropTypes from 'prop-types';

// == Composant
const Input = ({   
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {

  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

    return (
      <>
        <label htmlFor={inputId} className="connection-label">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={handleChange}

        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        className="connection__input"
      />
      </>
    );
  };

  Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  

  Input.defaultProps = {
    value: '',
  };
  
  // == Export
  export default Input;