import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  background-color: ${({ $pageBg }) => $pageBg};
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 10px;
  padding-left: ${({ $sidebarOpen }) => $sidebarOpen ? '250px' : 0};
  padding-left: 20px;
`;

export const StyledBlockContainer = styled.div`
  border-top: 4px solid ${({$markColor}) => $markColor};
  border-radius: 6px;
  background-color: white;
  width: 50%;
  min-width: ${({$minWidth}) => $minWidth || '200px'};
  max-width: ${({$maxWidth}) => $maxWidth || '600px'};
  padding: 10px;
  margin-bottom: 20px;
`;

export const StyledAuthField = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledLabel = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({$color}) => $color};
`;

export const StyledInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 8px 10px;
  width: 100%;
  font-size: 14px;
  border: 1px solid ${({$borderColor}) => $borderColor};
  border-radius: 4px;
  color: ${({$color}) => $color};
  ::placeholder {
    color: ${({$placeholderColor}) => $placeholderColor};
  }
`;

export const StyledIconWithToolTip = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const StyledToolTip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;