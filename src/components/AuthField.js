import { useState, useMemo, useContext  } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../contexts/ThemeContext";
import { validators } from "../utils/validators";
import { 
  StyledAuthField, 
  StyledLabel, 
  StyledInputBlock, 
  StyledInput,
  StyledIconWithToolTip,
  StyledToolTip
} from "./basicStyledComponents";
import { Icon } from './Icon';

export const AuthField = ({ label, placeholder, type = 'text', value = '', onChange, error }) => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  const warnings = useMemo(() => ({ 
    email: t('email_invalid'), 
    password: t('password_invalid')
  }), [t]);

  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => {
    if (!value) return false;
    return validators[type]?.(value);
  }, [value, type]);

  const warning = useMemo(() => {
    if (!touched || !value) return '';
    if (!isValid) return warnings[type];
    return '';
  }, [touched, value, isValid, warnings, type]);

  const iconState = useMemo(() => {
    if (!touched && !error) return null;          // initial
    if (error) return 'error';                    // server error
    if (warning) return 'warning';                // local warning
    if (isValid) return 'check';                  // success
    return null;
  }, [touched, error, warning, isValid]);

  const iconColor = useMemo(() => {
    if (error) return colors.iconErr;
    if (warning) return colors.iconWarn;
    if (isValid) return colors.iconGreen;
    return null;
  }, [error, warning, isValid, colors]);

  const handleChange = (e) => {
    const nextValue = e.target.value;
    onChange?.(nextValue, validators[type]?.(nextValue));
  };

  return (
    <StyledAuthField>
      {label && (
        <StyledLabel $color={colors.iconGreen}>{label}</StyledLabel>
      )}
      <StyledInputBlock>
        <StyledInput 
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          $color={colors.textInput}
          $placeholderColor={colors.textPlaceholder}
          $borderColor={iconColor || colors.iconGreen}
        />
         {iconState && (
          <StyledIconWithToolTip>
            {(warning || error) && (
              <StyledToolTip className="tooltip">
                {error || warning}
              </StyledToolTip>
            )}
            <Icon
              name={iconState}
              color={iconColor}
              stroke={iconColor}
              width={24}
              height={24}
            />
          </StyledIconWithToolTip>
        )}
      </StyledInputBlock>
    </StyledAuthField>
  );
};