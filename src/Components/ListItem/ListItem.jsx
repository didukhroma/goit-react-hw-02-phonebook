import Button from '../Utils/Button';

const ListItem = ({ contact: { name, number, id }, onClick }) => {
  return (
    <li>
      {name} : {number}
      <Button text="Delete" onClick={onClick} id={id} />
    </li>
  );
};
export default ListItem;
