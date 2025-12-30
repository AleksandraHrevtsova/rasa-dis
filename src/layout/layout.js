const assets = {
  logo: require('../images/logo.png'),
};

const fontNormal = 'GothamRounded-Book';
const fontMedium = 'GothamRounded-Medium';
const fontBold = 'GothamRounded-Bold';

export default function getLayout() {
  return {
    brand: 'rasa',
    logo: assets.logo,

    iconSize: 32,
    fontSize: '18px',
    padding: 100,
    borderRadius: '4px',

    transition: 'all 80ms linear',
    hoverTransition: 'all .15s',

    textFont: fontNormal,
    buttonFont: fontBold,
    titleFont: fontBold,
    infoFont: fontMedium,

    loginLogoStyle: { opacity: 0.8 },
    logoWidth: 0.33,
    poweredByLogoStyle: { height: 0 },
    logoPadding: 0,
    logoBottomMargin: 20,
    textAreaFont: fontNormal,
    textInputFont: fontBold,
  };
}