import capitalize from '../../../utils/capitalize';
const Input = ({
  type = 'text',
  name = 'input',
  pattern,
  title = 'input',
  onChange,
}) => {
  const text = capitalize(name);
  return (
    <label>
      <span>{text}</span>
      <input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </label>
  );
};
export default Input;
