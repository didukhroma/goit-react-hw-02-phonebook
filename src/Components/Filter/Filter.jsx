import Input from '../Utils/Input';

const Filter = ({ onChange }) => {
  return <Input type="text" name="find contacts by name" onChange={onChange} />;
};
export default Filter;
