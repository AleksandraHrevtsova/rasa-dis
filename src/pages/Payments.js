import { useContext } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../contexts/ThemeContext';

import withLeftSideBar from '../hocs/withLeftSideBar';

import { StyledPageContainer, StyledPageContent } from '../components/basicStyledComponents';
import { Header } from '../components/Header';

const Payments = (props) => {
  const { colors, layout } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <StyledPageContainer $pageBg={colors.pageBg}>
      <Header
        {...props}
        colors={colors}
        layout={layout}
        pagetitle={t('payments')}
      >
      </Header>
      <StyledPageContent $sidebarOpen={props.sidebarOpen}>
        <p>lorem</p>
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default withLeftSideBar(Payments);