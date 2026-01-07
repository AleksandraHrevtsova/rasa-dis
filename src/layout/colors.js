const colors = {
  // Navigation
  mainGreen: '#6c9a00',   // mainGreen
  sidebarHover: '#5f8700',
  sidebarActive: '#567a00',
  sidebarText: '#ffffff',

  // Primary actions
  secondaryGreen: '#9cb60f',   // secondaryGreen
  primaryHover: '#8ca30d',
  primaryActive: '#7b8f0b',
  primaryText: 'red', // '#ffffff',

  // Page & surfaces
  white: '#ffffff',
  cardBg: '#ffffff',
  border: '#e2e6da',

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

  warnColor: '#E6A800',
  warnSoft: '#D4B106',
  errColor: '#C62828',
  errSoft: '#B71C1C'
};

export default function getColors() {
  return { 
    ...colors,
    // sidebar
    sidebarBg: colors.mainGreen,
    sidebarColor: colors.white,

    // header
    headerBg: colors.mainGreen,

    // menu
    menuBtnBg: colors.mainGreen,
    
    // common
    hovercolor: colors.secondaryGreen,
    btnBgHover: colors.secondaryGreen,
    iconWhite: colors.white,
    iconGreen: colors.mainGreen,
    iconWarn: colors.warnColor,
    iconErr: colors.errColor,
    pageBg: colors.lightGrey,
    pageTitleColor: colors.mainGreen,
    borderColor: colors.lightBorderGrey,
  };
}