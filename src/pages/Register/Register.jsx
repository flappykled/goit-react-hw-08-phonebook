import { useDispatch } from 'react-redux';
import { BsPersonPlusFill, BsFillLockFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { RegisterForm, RegisterFormInput, RegisterFormBtn, ContainerRegister, RegisterLabel } from './Register.styled';
import { register } from '../../redux/auth/authOperations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(register(obj));

    e.target.reset();
  };
  
  return (
    <ContainerRegister>
      <RegisterForm autoComplete="off" onSubmit={handleSubmit}>
        <RegisterLabel>
          <BsPersonPlusFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Name
        </RegisterLabel>
        <RegisterFormInput type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required placeholder="Adrian Cross" />
        <RegisterLabel>
          <BsFillEnvelopeFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Email
        </RegisterLabel>
        <RegisterFormInput type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="example@mail.com" />
        <RegisterLabel>
          {' '}
          <BsFillLockFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Password
        </RegisterLabel>
        <RegisterFormInput type="password" name="password" required minLength="7" />
        <RegisterFormBtn type="submit">Register</RegisterFormBtn>
      </RegisterForm>
    </ContainerRegister>
  );
};

export default Register;