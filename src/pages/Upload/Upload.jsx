import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import shortid from 'shortid';
import { BsPersonPlusFill, BsFillTelephoneFill } from 'react-icons/bs';
import { UploadForm, UploadFormInput, UploadFormBtn, UploadLabel, ContainerUpload } from './Upload.styled';
import { editContact } from '../../redux/contacts/contactsOperations';
import { BackLink } from '../../components/BackLink/BackLink';

const Upload = () => {
  const nameInputIdFirst = shortid.generate('');
  const nameInputIdSecond = shortid.generate('');
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(state => state.contacts.items);
  const contact = items.find(el => el.id === id);

  useEffect(() => {
    if (!contact) return;
    setName(contact?.name);
    setNumber(contact?.number);
    // eslint-disable-next-line
  }, [contact]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const navig = () => {
    navigate(backLinkHref);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contact?.name === name && contact?.number === number) {
      toast.warning('No change. Tray again or "Go back"');
      return;
    }

    dispatch(editContact({ id, name, number, navig }));
  };

  return (
    <>
      <ContainerUpload>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <UploadForm onSubmit={handleSubmit}>
          <UploadLabel htmlFor={nameInputIdFirst}>
            <BsPersonPlusFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
            Name
          </UploadLabel>
          <UploadFormInput
            id={nameInputIdFirst}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <UploadLabel htmlFor={nameInputIdSecond}>
            {' '}
            <BsFillTelephoneFill size={16} style={{ marginRight: '5px', marginLeft: '1px' }} />
            Number
          </UploadLabel>
          <UploadFormInput
            id={nameInputIdSecond}
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            minLength="10"
            maxLength="17"
          />
          <UploadFormBtn type="submit">Edit contact </UploadFormBtn>
        </UploadForm>
      </ContainerUpload>
    </>
  );
};

export default Upload;