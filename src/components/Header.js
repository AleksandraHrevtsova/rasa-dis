import styled from 'styled-components';
import { MenuButton } from './Buttons';
import { menuBtnTypes } from '../utils/buttonTypes';

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
  flex: 1 1 auto;
  padding-left: ${({ $sidebarOpen }) => $sidebarOpen ? '250px' : 0};
  color: ${({ color }) => color};
`;

export const Header = (props) => {

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
        {props.children}
      </HeaderContent>
    </HeaderContainer>
  );
};
