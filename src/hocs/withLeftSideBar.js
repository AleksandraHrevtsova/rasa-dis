import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';

import LeftSidebar from "../components/LeftSidebar";
import { useUI } from '../contexts/UIContext';

const MainContent = styled.div`
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const withLeftSideBar = (Component) => {
  const WrappedComponent = (props) => {
    const { colors, layout } = useContext(ThemeContext);
    const { isSidebarOpen, toggleSidebar } = useUI();

    const handleToggleSidebar = () => toggleSidebar();

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
        sidebar={<LeftSidebar toggleSidebar={handleToggleSidebar}/>}
        open={isSidebarOpen}
        styles={sideBarStyles}
      >
        <MainContent $backgroundcolor={colors.pageBg}>
          <Component
            {...props}
            sidebarOpen={isSidebarOpen}
            toggleSideBar={handleToggleSidebar}
          />
        </MainContent>
      </Sidebar>
    );
  };

  return WrappedComponent;
};

export default withLeftSideBar;