import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.any.isRequired,
};