import { useState, useMemo, useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { Icon } from "./Icon";

import styled from 'styled-components';

import { 
  StyledBlockContainer, 
  StyledLabel, 
  StyledInputBlock, 
  StyledInput
} from './basicStyledComponents';

const StyledInputButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 4px;
`;

export const TextEditField = ({ label, value, handleClick }) => {
  const { colors, layout } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState(value);
  const [editModeOn, setEditModeOn] = useState(false);

  const handleEditClick = () => {
    setEditModeOn(!editModeOn);
    handleClick();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const iconName = useMemo(() => editModeOn ? 'check' : 'edit', [editModeOn]);
  
  const iconColor = useMemo(() => {
    if (editModeOn && (value === inputValue)) {
      return colors.iconWarn;
    }
    return colors.iconGreen;
  }, [editModeOn, value, inputValue, colors.iconWarn, colors.iconGreen]);

  return (
    <StyledBlockContainer $markColor={colors.iconGreen}>
      {label && (
        <StyledLabel>{label}</StyledLabel>
      )}
      <StyledInputBlock>
        <StyledInput 
          type="text"
          placeholder={value}
          value={inputValue}
          onChange={handleChange}
        />
        <StyledInputButton onClick={handleEditClick}>
          <Icon
            name={iconName}
            className={iconName}
            color={iconColor}
            stroke={iconColor}
            width={layout.iconSize}
            height={layout.iconSize}
          />
        </StyledInputButton>
      </StyledInputBlock>
    </StyledBlockContainer>
  );
};

export const RequisitesBlock = ({ label, requisites }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <StyledBlockContainer $markColor={colors.iconGreen}>
      {label && (
        <StyledLabel>{label}</StyledLabel>
      )}
      {requisites ? (
        <div>
          <p>{requisites.payee.name}</p>
          <p>КОД ЄДРПОУ: {requisites.payee.code}</p>
          <p>{requisites.bank.iban}</p>
          <p>{requisites.bank.name}</p>
        </div>
      ) : (
        <div>Реквізити не доступні</div>
      )}

    </StyledBlockContainer>
  );
};