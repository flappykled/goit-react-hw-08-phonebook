import { useSelector } from 'react-redux';
import { TbHandClick, TbArrowBigDown } from 'react-icons/tb';
import { HomeMain, HomeTitle, HomeText, Link, HomeWrap } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  
  return (
    <HomeMain>
      {isLoggedIn ? (
        <>
          <HomeTitle>
            Welcome to your Phonebook, <span> {name} </span>{' '}
          </HomeTitle>
          <HomeText>To add a new contact</HomeText>
          <TbArrowBigDown size={30} style={{ marginBottom: '20px' }} /> <br />
          <Link to="/contacts">
            Click here <TbHandClick size={20} />
          </Link>
        </>
      ) : (
        <>
          <HomeTitle>Welcome to Phonebook!</HomeTitle>
          <HomeWrap>
            <div>
              <HomeText>If you haven't registered yet</HomeText>
              <TbArrowBigDown size={30} style={{ marginBottom: '20px' }} /> <br />
              <Link to="/register">
                Click here <TbHandClick size={20} />
              </Link>
            </div>
            <div>
              {' '}
              <HomeText>If you already have an account</HomeText>
              <TbArrowBigDown size={30} style={{ marginBottom: '20px' }} /> <br />
              <Link to="/login">
                Click here <TbHandClick size={20} />
              </Link>
            </div>
          </HomeWrap>
        </>
      )}
    </HomeMain>
  );
};

export default Home;