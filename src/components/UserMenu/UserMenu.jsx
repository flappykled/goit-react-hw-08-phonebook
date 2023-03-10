import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineLogout } from 'react-icons/hi';
import { LogOutBtn, Usertext, UserConteiner } from './UserMenu.styled';
import { LogOut } from '../../redux/auth/authOperations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  
  return (
    <UserConteiner>
      <Usertext>
        {' '}
        Welcome, <b>{name}</b>{' '}
      </Usertext>
      <LogOutBtn type="button" onClick={() => dispatch(LogOut())}>
        <HiOutlineLogout size={18} />
      </LogOutBtn>
    </UserConteiner>
  );
};