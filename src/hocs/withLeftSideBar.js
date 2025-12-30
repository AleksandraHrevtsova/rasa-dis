import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';

import LeftSidebar from "../components/LeftSidebar";

const MainContent = styled.div`
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const withLeftSideBar = (Component) => {
  const WrappedComponent = (props) => {
    const { colors, layout } = useContext(ThemeContext);

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sideBarStyles = {
      sidebar: {
        zIndex: 130,
        width: layout.sidebarWidth,
        height: layout.sidebarHeight,
        overflow: 'hidden auto',
        background: colors.sidebarBg,
        transition: layout.transition,
      },
      overlay: {
        zIndex: 120,
      },
      content: {
        height: '100%',
        overflow: 'hidden'
      }
    };

    return (
      <Sidebar
        sidebar={<LeftSidebar setSidebarOpen={() => {
          console.log('Hide sidebar');
          setSidebarOpen(!sidebarOpen);
        }}/>}
        open={sidebarOpen}
        // onSetOpen={setSidebarOpen}
        styles={sideBarStyles}
      >
        <MainContent $backgroundcolor={colors.pageBg}>
          <Component
            {...props}
            sidebarOpen={sidebarOpen}
            toggleSideBar={() => setSidebarOpen(!sidebarOpen)}
          />
        </MainContent>
      </Sidebar>
    );
  };

  return WrappedComponent;
};

export default withLeftSideBar;