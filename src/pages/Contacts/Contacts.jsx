import { useSelector } from 'react-redux';
import { Container, ContactStart, ContactWrap } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <ContactForm />
      <ContactWrap>
        {' '}
        {contacts.length > 0 ? <Filter /> : <ContactStart>You don't have any contacts yet</ContactStart>}
        <ContactList />
      </ContactWrap>
    </Container>
  );
};

export default Contacts;