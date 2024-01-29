import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import bgVisual from './assets/images/bg-visual.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #48424a url(${bgVisual}) 0 0 no-repeat;
  background-size: cover;
`;

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  min-height: 300px;
  padding: 40px;
  margin: 0 auto;
`;

const StyledVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  column-gap: 24px;
  @media (max-width: 414px) {
    flex-direction: column-reverse;
    row-gap: 24px;
  }
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  p {
    color: var(--color-lightGray);
    text-align: center;
    text-shadow: 7px 5px 4px black;
  }
`;

const StyledVisualImage = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  border: 2px solid black;
  border-radius: 300px;
  overflow: hidden;
  filter: opacity(0.7);
  &:hover {
    filter: none;
  }
  @media (max-width: 414px) {
    width: 160px;
    height: 160px;
  }
`;

const Home = forwardRef(({ data, visualImage, visualBg }, ref) => {
  return (
    <StyledContainer ref={ref}>
      <StyledInner>
        <StyledVisual>
          <StyledDesc>
            {data?.length > 0 &&
              data.map((text, idx) => (
                <p key={`visual-text-${idx}`}>{`${text}`}</p>
              ))}
          </StyledDesc>
          <StyledVisualImage>
            <img src={visualImage} alt="me" width={'auto'} height={'350px'} />
          </StyledVisualImage>
        </StyledVisual>
        {/* <div style={ style.arrow }>
					<img src="" alt="다음 방향 화살표" width={20} height={50} />
				</div> */}
      </StyledInner>
    </StyledContainer>
  );
});

export default Home;
