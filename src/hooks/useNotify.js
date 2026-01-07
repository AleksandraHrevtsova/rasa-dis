import { useContext } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../contexts/ThemeContext';

export const useNotify = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  const setOptions = (type, options) => {
    let textColor = colors.textPrimary;

    if (type === 'success') {
      textColor = colors.success;
    }

    if (type === 'error') {
      textColor = colors.error;
    }

    if (type === 'warning') {
      textColor = colors.warning;
    }

    return {
      className: 'toast',
      style: { color: textColor },
      ...options
    }
  }

  return {
    success: (key, options) => toast.success(t(key), setOptions('success', options)),
    error: (key, options) => toast.error(t(key), setOptions('error', options)),
    warning: (key, options) => toast.warning(t(key), setOptions('warning', options)),
    info: (key, options) => toast(t(key), setOptions('', options)),
  }
};