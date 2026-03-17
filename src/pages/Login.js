import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { ThemeContext } from '../contexts/ThemeContext';
import styled from 'styled-components';
import { login } from "../services/auth.service";
import { useTranslation } from 'react-i18next';

import { useNotify } from '../hooks/useNotify';

import { StyledPageContainer, StyledBlockContainer} from '../components/basicStyledComponents';
import { AuthField } from '../components/AuthField';

import logo from '../images/logo.png';
import { manifest } from '../Manifest';

import { TextButton } from '../components/Buttons';

const StyledLoginPageContainer = styled(StyledPageContainer)`
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const StyledLoginBlockContainer = styled(StyledBlockContainer)`
  display: flex;
  flex-flow: column;
  justify-content: center;

  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 90px;
  margin-bottom: 2rem;
  border-radius: 4px;
  background-color: ${({$bgc}) => $bgc};
`;

const Logo = styled.img`
  width: 50%;
`;

const StyledAuthTitle = styled.h2`
  color: ${({$color}) => $color};
  margin-bottom: 2rem;
  text-align: center;
`;

const Login = () => {
  const { colors } = useContext(ThemeContext);

  const notify = useNotify();

  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const [logoName] = useState(manifest.short_name);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [ errors, setErrors ] = useState({ form: 'Якась помилка'});
  // const [ errors, setErrors ] = useState({});
  const isCanSubmit = emailValid && passwordValid;

  const handleSubmit = async () => {
    setErrors({});

    if (!emailValid || !passwordValid) return;

    const { error } = await login(email, password);
    if (error) {
      setErrors({ [error.field]: t(error.message)});
      notify.error(error.message);
      return;
    }

    navigate(from, { replace: true });
  }

  return (
    <StyledLoginPageContainer $pageBg={colors.pageBg}>
      <StyledLoginBlockContainer 
        $markColor={colors.iconGreen}
        $minWidth={'300px'}
        $maxWidth={'450px'}
        >
        <LogoContainer $bgc={colors.iconGreen}>
          <Logo src={logo} alt={logoName} />
        </LogoContainer>
        <StyledAuthTitle
          $color={colors.iconGreen}
        >{t('log_in')}</StyledAuthTitle>

        <AuthField
          placeholder={t('email_label')}
          type="email"
          value={email}
          onChange={(v, valid) => {
            setEmail(v);
            setEmailValid(valid);
            setErrors({});
          }}
          error={errors.input}
        />

        <AuthField
          placeholder={t('password_label')}
          type="password"
          value={password}
          onChange={(v, valid) => {
            setPassword(v);
            setPasswordValid(valid);
            setErrors({});
          }}
          error={errors.input}
        />
        
        <TextButton
          label={t('login_click')}
          handleClick={handleSubmit}
          isDisable={!isCanSubmit}
        />

      </StyledLoginBlockContainer>
    </StyledLoginPageContainer>
  );
};

export default Login;