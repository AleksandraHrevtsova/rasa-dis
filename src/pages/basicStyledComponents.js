import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 10px;
  padding-left: ${({ $sidebarOpen }) => $sidebarOpen ? '250px' : 0};
  padding-left: 20px;
  background-color: ${({ $pageBg }) => $pageBg};
`;