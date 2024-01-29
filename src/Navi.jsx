import React from 'react';
import Tab from './components/Tab.jsx';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 48px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white);
  box-shadow: 0px 2px 4px #dddddd52;
  z-index: 100;
  column-gap: 8px;
`;

const StyledH1Area = styled.div`
  padding: 2px 8px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px;
  h1 {
    flex: 0 0 auto;
    font-size: 16px;
    font-weight: 300;
  }
  span {
    color: var(--color-primary);
    line-height: 16px;
    vertical-align: -2px;
    font-size: 30px;
  }
`;

function Navi({ data }) {
  return (
    <StyledContainer>
      <StyledH1Area>
        <h1>
          <span>{`<`}</span> sunhwa <span>{`/>`}</span>
        </h1>
      </StyledH1Area>
      <Tab data={data} />
    </StyledContainer>
  );
}

export default Navi;
