import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LogoutButton } from './Buttons';
import { logout } from '../utils/logout';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Logout = (props) => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <LogoutButton
        {...props}
        label={t('log_out')}
        handleClick={logout}
      />
    </StyledContainer>
  );
};