import { useContext } from "react";
import FunctionsContext from "../contexts/FunctionsContext";

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MenuButton } from './Buttons';
import { menuBtnTypes } from '../utils/buttonTypes';
import { TextButton } from "../components/Buttons";

const HeaderContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor};
  padding: 10px;
  background-color: ${({ $headerBg }) => $headerBg};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  padding-left: ${({ $sidebarOpen }) => $sidebarOpen ? '250px' : 0};
  color: ${({ color }) => color};
`;

const StyledPageTitle = styled.h2`
  color: white;
`;

export const Header = (props) => {
  const { t } = useTranslation();
  const { goBack } = useContext(FunctionsContext);
  return (
    <HeaderContainer 
      $borderColor={props.colors.borderColor}
      $headerBg={props.colors.headerBg}
    >
      <MenuButton 
        type={menuBtnTypes.open}
        handleClick={props.toggleSideBar}
      />
      <HeaderContent $sidebarOpen={props.sidebarOpen}>
        {props.isBack && (
          <TextButton
            label={t('back')}
            handleClick={goBack}
          />
        )}
        {props.pagetitle && (
          <StyledPageTitle>{props.pagetitle}</StyledPageTitle>
        )}
        {props.children}
      </HeaderContent>
    </HeaderContainer>
  );
};
