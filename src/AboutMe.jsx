import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  background-color: var(--color-lightGray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInner = styled.div`
  max-width: 800px;
  padding: 70px 0;
  margin: 0 auto;
`;

const StyledContTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: var(--color-primary);
`;

const StyledContSubTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const StyledSkill = styled.div`
  padding: 70px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  ul {
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px 24px;
  }
  li {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      row-gap: 8px;
      width: 150px;
      height: 120px;
      box-sizing: border-box;
      padding: 12px;
      box-shadow: 1px 1px #fff;
      border-radius: 4px;
      background-color: var(--color-white);
    }
    img {
      width: 48px;
    }
    span {
      color: var(--color-black);
      font-size: 16px;
      text-align: center;
      font-family: court;
    }
  }
  @media (max-width: 414px) {
    ul {
    }
    li div:first-child {
      width: 100px;
      height: 100px;
      span {
        font-size: 12px;
      }
    }
  }
`;

const AboutMe = forwardRef(({ data }, ref) => {
  const dataKeys = Object.keys(data);
  return (
    <StyledContainer ref={ref}>
      <StyledInner>
        <StyledContTitle>SKILLS & EXPERIENCE</StyledContTitle>

        {dataKeys.length > 0 &&
          dataKeys.map(_key => (
            <StyledSkill key={_key}>
              <StyledContSubTitle>
                {_key.toUpperCase()}
              </StyledContSubTitle>
              <ul>
                {data[_key]?.length > 0 &&
                  data[_key].map(([_lang, _icon]) => (
                    <li key={_lang}>
                      <div>
                        {_icon && (
                          <img src={_icon} alt={_lang} width="52" />
                        )}
                        <span>{_lang}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </StyledSkill>
          ))}
      </StyledInner>
    </StyledContainer>
  );
});

export default AboutMe;
