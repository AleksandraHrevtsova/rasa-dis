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
  textPrimary: '#1f2937',
  textSecondary: '#4b5563',
  textMuted: '#6b7280',
  lightGrey: '#f4f6f1',
  lightBorderGrey: '#dee1e6',
  lightOlive: '#f7f9f2',
  coldGrey :'#eef1f4',
};

export default function getColors() {
  return { 
    ...colors,
    // sidebar
    sidebarBg: colors.mainGreen,
    sidebarColor: colors.white,

    // menu
    menuBtnBg: colors.mainGreen,
    
    // common
    hovercolor: colors.secondaryGreen,
    btnBgHover: colors.secondaryGreen,
    iconWhite: colors.white,
    iconGreen: colors.mainGreen,
    pageBg: colors.white,
    pageTitleColor: colors.mainGreen,
    borderColor: colors.lightBorderGrey,
  };
}