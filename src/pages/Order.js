import { useEffect, useState, useContext } from "react";
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../contexts/ThemeContext';


import withLeftSideBar from '../hocs/withLeftSideBar';

import { StyledPageContainer, StyledPageContent } from './basicStyledComponents';
import { Header } from '../components/Header';

// import styled from "styled-components";
// import { products } from "../dataMocks/products";

// const units = [
//   {
//     id: '1',
//     tag: 'kg',
//     name: 'кг',
//     isSelected: false 
//   },
//   {
//     id: '2',
//     tag: 'units',
//     name: 'шт',
//     isSelected: true 
//   },
//   {
//     id: '3',
//     tag: 'pallets',
//     name: 'палети',
//     isSelected: false 
//   }
// ];

const initialOrder = {
  39881: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39880: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39852: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39873: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39963: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39883: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39844: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  39845: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  },     
  7551: {
    f1: { units: '', kg: '', pallets: '' },
    f2: { units: '', kg: '', pallets: '' },
    total: { units: '', kg: '', pallets: '' },
  }
};

const Order = (props) => {
  const { colors, layout } = useContext(ThemeContext);
  const { t } = useTranslation();
  // const [unit, setUnit] = useState(units.find(u => u.isSelected));
  const [order] = useState(initialOrder);

  useEffect(() => {
    // console.log('order:', order);
  }, [order]);
  
  return (
    <StyledPageContainer>
      <Header
        {...props}
        colors={colors}
        layout={layout}
        pagetitle={t('edit_order_page')}
        isBack={true}
      >
      </Header>
      <StyledPageContent $sidebarOpen={props.sidebarOpen}>
        <p>lorem</p>
      </StyledPageContent>
    </StyledPageContainer>
    // <>
    //   <h1>Test Order page</h1>
      
    //   <select onChange={setUnit}>
    //     <option>{unit.name}</option>
    //   </select>
    //   <table className="order-table">
    //     <thead>
    //       <tr>
    //         <th>Название</th>
    //         <th>юр особа - 1 </th>
    //         <th>юр особа - 2</th>
    //         <th>Всього у замовленні</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {products.map((product) => (
    //         <tr key={product.id}>
    //           <td>{product.name}</td>

    //           {['f1', 'f2', 'total'].map((form) => {
    //             if (form === 'total') {
    //               return (<td key='wer'>
    //                 <span>{order[product.id].total[unit.tag]}</span>
    //               </td>)
    //             } else {
    //               return (
    //               <td key={`${form}`}>
    //                 <input
    //                   type="number"
    //                   min="0"
    //                   value={order[product.id][form][unit.tag]}
    //                   onChange={(e) =>
    //                     setOrder((prev) => ({
    //                       ...prev,
    //                       [product.id]: {
    //                         ...prev[product.id],
    //                         [form]: {
    //                           ...prev[product.id][form],
    //                           [unit.tag]: e.target.value,
    //                         },
    //                         total: {
    //                           units:
    //                             (Number(prev[product.id].f1.units) || 0) +
    //                             (Number(prev[product.id].f2.units) || 0) +
    //                             (form === 'f1' && unit.tag === 'units' ? Number(e.target.value) - (Number(prev[product.id].f1.units) || 0) : 0) +
    //                             (form === 'f2' && unit.tag === 'units' ? Number(e.target.value) - (Number(prev[product.id].f2.units) || 0) : 0),
    //                           kg:
    //                             (Number(prev[product.id].f1.kg) || 0) +
    //                             (Number(prev[product.id].f2.kg) || 0) +
    //                             (form === 'f1' && unit.tag === 'kg' ? Number(e.target.value) - (Number(prev[product.id].f1.kg) || 0) : 0) +
    //                             (form === 'f2' && unit.tag === 'kg' ? Number(e.target.value) - (Number(prev[product.id].f2.kg) || 0) : 0),
    //                           pallets:
    //                             (Number(prev[product.id].f1.pallets) || 0) +
    //                             (Number(prev[product.id].f2.pallets) || 0) +
    //                             (form === 'f1' && unit.tag === 'pallets' ? Number(e.target.value) - (Number(prev[product.id].f1.pallets) || 0) : 0) +
    //                             (form === 'f2' && unit.tag === 'pallets' ? Number(e.target.value) - (Number(prev[product.id].f2.pallets) || 0) : 0),
    //                         },
    //                       },
    //                     }))
    //                   }
    //                 />
    //               </td>
    //             )}}
    //           )}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>

    // </>
  );
};

export default withLeftSideBar(Order);