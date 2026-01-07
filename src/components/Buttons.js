import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';

import { Icon } from "./Icon";

const basicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $borderRadius }) => $borderRadius};

  transition: ${({ $transition }) => $transition};
  text-shadow: 0px 0px 0px transparent;
  box-shadow: 0px 0px 0px transparent;
  cursor: ${({ disabled }) => disabled && 'no-drop'};

  &:hover {
    cursor: ${({ disabled }) => disabled && 'no-drop'};

    background: ${({ disabled, $btnBgHover }) => !disabled && ($btnBgHover || 'transparent')};
    box-shadow: 0px 0px 0px transparent;
    border: 2px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }
`;

const StyledIconButton = styled.button`
  ${basicStyles};
  
  padding: 6px;
  border: 2px solid transparent;
  color: ${({ $labelColor }) => $labelColor};
  background: ${({ $btnBg }) => $btnBg || 'transparent'};
`;

export const MenuButton = ({ type, handleClick }) => {
  const { colors, layout } = useContext(ThemeContext);
  return (
    <StyledIconButton 
      $borderRadius={layout.borderRadius}
      $transition={layout.hoverTransition}

      $btnBg={colors.menuBtnBg}
      $btnBgHover={colors.btnBgHover}

      onClick={handleClick}
    >
      <Icon
        name={`menu_${type}`}
        className={`menu_${type}`}
        color={colors.iconWhite}
        stroke={colors.iconWhite}
        width={layout.iconSize}
        height={layout.iconSize}
      />
    </StyledIconButton>
  );
};

const StyledLangButton = styled.button`
  ${basicStyles};

  font-weight: 500;
  text-transform: uppercase;

  padding: 10px;
  border: 2px solid ${({ disabled }) => disabled ? 'transparent' : 'white'};
  color: ${({ $isSelected, $btnBg, $btnColor }) => $isSelected ? $btnBg : $btnColor};
  background: ${({ $isSelected, $btnBg, $btnColor }) => $isSelected ? $btnColor : $btnBg};
`;

export const LanguageButton = ({ label, isSelected, handleClick, colors, layout }) => {
  return (
    <StyledLangButton 
      $isSelected={isSelected}
      $btnBg={colors.sidebarBg}
      $btnColor={colors.sidebarColor}

      $btnBgHover={colors.btnBgHover}
      $borderRadius={layout.borderRadius}
      $transition={layout.hoverTransition}

      onClick={handleClick}
    >
      {label}
    </StyledLangButton>
  );
};

export const TextButton = ({ label, handleClick, colors, layout, isDisable }) => {
  return (
    <StyledLangButton 
      $btnBg={colors.sidebarBg}
      $btnColor={colors.sidebarColor}

      $btnBgHover={colors.btnBgHover}
      $borderRadius={layout.borderRadius}
      $transition={layout.hoverTransition}

      onClick={handleClick}
      disabled={isDisable}
    >
      {label}
    </StyledLangButton>
  );
};

export const LogoutButton = ({ label, isSelected, handleClick, colors, layout }) => {
  return (
    <StyledLangButton 
      $isSelected={isSelected}
      $btnBg={colors.sidebarBg}
      $btnColor={colors.sidebarColor}

      $btnBgHover={colors.btnBgHover}
      $borderRadius={layout.borderRadius}
      $transition={layout.hoverTransition}

      onClick={handleClick}
    >
      {label}
    </StyledLangButton>
  );
};