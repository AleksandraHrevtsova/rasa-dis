import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RU_LANG_CODE, UK_LANG_CODE } from '../i18n';
import styled from 'styled-components';
import { LanguageButton } from './Buttons';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export const LanguageToggle = (props) => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const switchLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLang(langCode);
    localStorage.setItem('lang', langCode);
  };

  const isRuLangSelected = useMemo(() => selectedLang === RU_LANG_CODE, [selectedLang]);
  const isUkLangSelected = useMemo(() => selectedLang === UK_LANG_CODE, [selectedLang]);

  return (
    <StyledContainer>
      <LanguageButton
        {...props}
        isSelected={isRuLangSelected}
        label={RU_LANG_CODE}
        handleClick={() => switchLanguage(RU_LANG_CODE)}
      />
      <LanguageButton
        {...props}
        isSelected={isUkLangSelected}
        label={UK_LANG_CODE}
        handleClick={() => switchLanguage(UK_LANG_CODE)}
      />
    </StyledContainer>
  );
};