import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonPlusFill, BsFillTelephoneFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { Form, FormInput, FormBtn, Contactabel } from './ContactForm.styled';
import { addContact } from '../../redux/contacts/contactsOperations';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const nameInputIdFirst = shortid.generate();
  const nameInputIdSecond = shortid.generate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      [e.target.elements.name.name]: e.target.elements.name.value,
      [e.target.elements.number.name]: e.target.elements.number.value,
    };

    const includesName = contacts.find(contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase() && contact.number === e.target.elements.number.value);

    if (includesName) {
      toast.error(`"${e.target.elements.name.value}" with same number is already in contacts`);
      e.target.reset();
      return;
    }

    dispatch(addContact(obj));

    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Contactabel htmlFor={nameInputIdFirst}>
          <BsPersonPlusFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Name
        </Contactabel>
        <FormInput
          id={nameInputIdFirst}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Adrian Cross"
        />
        <Contactabel htmlFor={nameInputIdSecond}>
          {' '}
          <BsFillTelephoneFill size={16} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Number
        </Contactabel>
        <FormInput
          id={nameInputIdSecond}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+38 077-777-77-77"
          minLength="10"
          maxLength="17"
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </div>
  );
};