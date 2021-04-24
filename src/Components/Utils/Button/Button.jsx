import PropTypes from 'prop-types';
const Button = ({ type = 'button', text = 'Button', onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button type={type} onClick={onClick ? handleClick : null}>
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
