const colors = {
  // common colors
  white: '#ffffff',
  black: '#000000',
  // primary colors
  brand: '#6c9a00', // main brand color
  error: '#c62828',
  warning: '#e6a800',
  // secondary colors
  secondaryBrand: '#9cb60f', // secondary brand color
  secondaryError: '#b71c1c',
  secondaryWarning: '#d4b106',
  // Text
  textPrimary: '#2F3A1F',
  textSecondary: '#5F6F4A',
  textInput: '#1F2933',
  textPlaceholder: '#9AA38B',
  textMuted: '#6b7280',
  lightGrey: '#f4f6f1',
  lightBorderGrey: '#dee1e6',
  lightOlive: '#f7f9f2',
  coldGrey: '#eef1f4',
  // Navigation
  sidebarHover: '#5f8700',
  sidebarActive: '#567a00',

  // Primary actions
  primaryHover: '#8ca30d',
  primaryActive: '#7b8f0b',

  // Page & surfaces
  border: '#e2e6da',

};

export default function getColors() {
  return { 
    // ...colors,
    border: colors.border,
    // sidebar
    sidebarBg: colors.brand,
    sidebarColor: colors.white,

    // header
    headerBg: colors.brand,

    // menu
    menuBtnBg: colors.brand,
    
    // common
    hovercolor: colors.secondaryBrand,
    btnBgHover: colors.secondaryBrand,
    iconWhite: colors.white,
    iconGreen: colors.brand,

    success: colors.brand,
    warning: colors.warning,
    error: colors.error,

    pageBg: colors.lightGrey,
    pageTitleColor: colors.brand,
    borderColor: colors.lightBorderGrey,
  };
}