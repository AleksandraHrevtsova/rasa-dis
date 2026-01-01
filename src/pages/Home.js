import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../contexts/ThemeContext';

import withLeftSideBar from '../hocs/withLeftSideBar';

import { StyledPageContainer, StyledPageContent } from './basicStyledComponents';
import { Header } from '../components/Header';
import { isNowInRange } from '../utils/date';
import { osama_requisites, other_requisites } from '../dataMocks/requisites';
import { TextEditField, RequisitesBlock } from "../components/TextEditField";


const Home = (props) => {
  const { colors, layout } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [actuaOsamalRequisites] = useState(getActualRequisites('osama'));
  const [actuaOtherRequisites] = useState(getActualRequisites());

  function getActualRequisites(type) {
    if (type === 'osama') {
      return osama_requisites.find(r => isNowInRange(r.start_date, r.end_date) && r);
    }
    return other_requisites.find(r => isNowInRange(r.start_date, r.end_date) && r);
  };

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <StyledPageContainer>
      <Header
        {...props}
        colors={colors}
        layout={layout}
        pagetitle={t('home')}
      >
      </Header>
      <StyledPageContent $sidebarOpen={props.sidebarOpen} $pageBg={colors.pageBg}>
        <TextEditField 
          label='Адреса доставки:'
          value='м. Запоріжжя, вул. Івановна, б.20'
          handleClick={handleClick}
        />
        <TextEditField
          label='Юридична особа (Ф-1):'
          value='Товариство з обмеженою відповідальністю "Хорека Дніпропетровськ"'
          handleClick={handleClick}
        />
        <TextEditField
          label='Юридична особа (Ф-2):'
          value='Антон Хорека'
          handleClick={handleClick}
        />
        <RequisitesBlock
          label='Актуальні загальні реквізити:'
          requisites={actuaOtherRequisites}
        />
        <RequisitesBlock
          label='Актуальні реквізити Осама:'
          requisites={actuaOsamalRequisites}
        />
      </StyledPageContent>
    </StyledPageContainer>
  );
};

export default withLeftSideBar(Home);