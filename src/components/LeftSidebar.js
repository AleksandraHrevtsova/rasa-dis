import { useContext, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router';

import { ThemeContext } from '../contexts/ThemeContext';

import logo from '../images/logo.png';
import { routesData } from '../utils/routesMap';
import { manifest } from '../Manifest';

import { LanguageToggle } from './LanguageToggle';
import { Logout } from './Logout';
import { Icon } from './Icon';

import { MenuButton } from './Buttons';
import { menuBtnTypes } from '../utils/buttonTypes';

const Sidebar = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  color: ${({$sidebarColor}) => $sidebarColor};
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  min-height: 90px;
  border-bottom: 1px solid white;
`;

const Logo = styled.img`
  width: 50%;
`;

const StyledMenuContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div``;

const StyledMenuItem = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;

  padding: .8rem;
  margin-top: 1rem;

  border-radius: 4px;

  font-weight: 500;
  color: ${({ $active, $itemBg, $itemColor }) => $active ? $itemBg : $itemColor};
  background-color: ${({ $active, $itemBg, $itemColor }) => $active ? $itemColor : $itemBg};
  
  ${({ $transition }) => $transition ? `transition: ${$transition}` : ''};
  &:hover {
    background-color: ${({ $hovercolor }) => $hovercolor};
    box-shadow: 1px 1px 2px ${({ $hovercolor }) => $hovercolor};
  }
`;

const MenuItemText = styled.p`
  display: flex;
  align-items: center;
  margin-left: .5rem;
  color: inherit;
  font-size: ${({$fontsize}) => $fontsize};
`;

const StyledVersionLabel = styled.p`
  text-align: center;
  font-size: .8rem;
  color: inherit;
`;

const MenuItem = ({ to, labelTag, icon, currentPath, ...rest }) => {
  const { colors, layout } = useContext(ThemeContext);
  const [ activeLink ] = useState(currentPath && currentPath === to);
  const { t } = useTranslation();
  const LinkComp = to ? Link : StyledDiv;

  const iconColor = useMemo(() => {
    return activeLink ? colors.iconGreen : colors.iconWhite;
  }, [ 
    activeLink, 
    colors.iconGreen,
    colors.iconWhite
  ]);

  return useMemo(() => (
    <LinkComp to={to}>
      <StyledMenuItem 
        $active={activeLink} 
        $transition={layout.transition}
        $hovercolor={colors.hovercolor} 
        $itemBg={colors.iconGreen}
        $itemColor={colors.iconWhite}
        {...rest}
      >
        <Icon
          name={icon}
          className={icon}
          color={iconColor}
          stroke={iconColor}
          width={layout.iconSize}
          height={layout.iconSize}
        />
        <MenuItemText $fontsize={layout.fontSize}>
          {t(labelTag)}
        </MenuItemText>
      </StyledMenuItem>
    </LinkComp>
  ), [
    to,
    labelTag,
    icon,
    iconColor,
    activeLink,
    colors,
    layout,
    t,
    rest
  ]);
};

const getMenuItemsDependOnRole = () => routesData;

const LeftSidebar = (props) => {
  const { colors, layout } = useContext(ThemeContext);
  const [appVersion] = useState(manifest.appVersion);
  const [logoName] = useState(manifest.short_name);
  const [menuItems, setMenuItems] = useState(getMenuItemsDependOnRole());

  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    let updated = false;
    if (!updated) {
      setMenuItems(getMenuItemsDependOnRole());
    }
    return () => {
      updated = true;
    };
  }, []);

  return useMemo(() => {
    return (
      <Sidebar $sidebarColor={colors.sidebarColor}>
        <LogoContainer>
          <Logo src={logo} alt={logoName} />
          <MenuButton 
            type={menuBtnTypes.close}
            handleClick={props.toggleSidebar}
          />
        </LogoContainer>
        <StyledMenuContainer>
          {menuItems.map((props) => 
            (<MenuItem key={props.to} currentPath={pathname} {...props} />)
          )}
        </StyledMenuContainer>
        <LanguageToggle colors={colors} layout={layout}/>
        <Logout colors={colors} layout={layout}/>
        <StyledVersionLabel>{t('app_version')}: {appVersion}</StyledVersionLabel>
      </Sidebar>
    );
  }, [
    appVersion, 
    logoName, 
    colors, 
    layout, 
    t, 
    menuItems, 
    pathname, 
    props.toggleSidebar
  ]);
};

export default LeftSidebar;
