import { useContext } from "react";
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../contexts/ThemeContext';

import withLeftSideBar from '../hocs/withLeftSideBar';
import TableComponent from "../components/Table";
import { StyledPageContainer, StyledPageContent } from './basicStyledComponents';
import { Header } from '../components/Header';

const data = [
  {
    id: '1',
    order_number: '01',
    delivery_date: '01.01.2026',
    status: 'В обробці',
    place: 'Запоріжжя',
    total_weight: '10 000',
  },
  {
    id: '2',
    order_number: '02',
    delivery_date: '08.01.2026',
    status: 'В обробці',
    place: 'Запоріжжя',
    total_weight: '15 000',
  },
  {
    id: '3',
    order_number: '03',
    delivery_date: '15.01.2026',
    status: 'В обробці',
    place: 'Запоріжжя',
    total_weight: '12 000',
  }
];

const tableData = {
  columns: ['order_number', 'delivery_date', 'status', 'place', 'total_weight'],
  rows: data
};

const Orders = (props) => {
  const { colors, layout } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToOrder = (id) => {
    // navigate(`/orders/${id}`);
    navigate(`/orders/${id}/edit`);
  };

  // const goToNewOrder = () => {
  //   // navigate(`/orders/${id}`);
  //   navigate(`/orders/create`);
  // };

  return (
    <StyledPageContainer>
      <Header
        {...props}
        colors={colors}
        layout={layout}
        pagetitle={t('orders')}
      >
      </Header>
      <StyledPageContent $sidebarOpen={props.sidebarOpen}>
        <TableComponent 
          title={t('orders')}
          tableData={tableData}
          handleRowClick={goToOrder}
        />
      </StyledPageContent>
    </StyledPageContainer>
    //   <button onClick={goToNewOrder}>Create new order</button>
    //   <Outlet />
  );
};

export default withLeftSideBar(Orders);