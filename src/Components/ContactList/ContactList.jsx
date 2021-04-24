import ListItem from '../ListItem/ListItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id} contact={contact} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ContactList;
