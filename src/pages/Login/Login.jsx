import { useDispatch } from 'react-redux';
import { BsFillEnvelopeFill, BsFillLockFill } from 'react-icons/bs';
import { logIn } from '../../redux/auth/authOperations';
import { LoginForm, LoginFormInput, LoginFormBtn, ContainerLogin, LoginLabel } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(logIn(obj));

    e.target.reset();
  };
  return (
    <ContainerLogin>
      <LoginForm autoComplete="off" onSubmit={handleSubmit}>
        <LoginLabel>
          <BsFillEnvelopeFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Email
        </LoginLabel>
        <LoginFormInput type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="example@mail.com" />
        <LoginLabel>
          <BsFillLockFill size={18} style={{ marginRight: '5px', marginLeft: '1px' }} />
          Password
        </LoginLabel>
        <LoginFormInput type="password" name="password" required minLength="7" />
        <LoginFormBtn type="submit">Log In</LoginFormBtn>
      </LoginForm>
    </ContainerLogin>
  );
};

export default Login;