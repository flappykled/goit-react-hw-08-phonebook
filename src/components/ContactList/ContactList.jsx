import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { ContactsList, ContactsBtn, ContactsItem, ContactsLink, ContactNotFound, ContactsText, Wrap, ContactsCallBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <div>
      {filteredContacts.length === 0 && contacts.length > 0 ? (
        <ContactNotFound>Not found...</ContactNotFound>
      ) : (
        <ContactsList>
          {filteredContacts.map(contact => (
            <ContactsItem key={contact.id}>
              <ContactsText>
                {' '}
                <BsPersonFill size={16} style={{ marginRight: '5px', marginLeft: '1px' }} />
                {contact.name}: {contact.number}
              </ContactsText>
              <Wrap>
                {' '}
                <Callto phone={contact.number}>
                  <ContactsCallBtn>
                    <BsFillTelephoneFill size={16} style={{ marginRight: '5px', marginLeft: '1px' }} />
                  </ContactsCallBtn>
                </Callto>
                <ContactsLink to={`/update/${contact.id}`} state={{ from: location }}>
                  {' '}
                  Edit
                </ContactsLink>
                <ContactsBtn onClick={() => dispatch(deleteContact(contact.id))}>Delete</ContactsBtn>
              </Wrap>
            </ContactsItem>
          ))}
        </ContactsList>
      )}
    </div>
  );
};