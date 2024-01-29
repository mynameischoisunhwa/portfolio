import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInner = styled.div`
  max-width: 900px;
  padding: 70px 20px;
  margin: 0 auto;
`;

const StyledContTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: var(--color-primary);
`;

const StyledProject = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

const StyledProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: calc(100% - 32px);
  padding: 16px;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  background-color: rgba(22, 22, 23, 0.76);
  .title {
    font-size: 18px;
    font-weight: 700;
    color: ${({ type }) =>
      type === 'personal' ? 'yellow' : 'var(--color-primary)'};
    letter-spacing: 1.5px;
    word-spacing: 2px;
  }
  .period {
    align-self: flex-end;
    font-size: 13px;
    color: lightGrey;
    span {
      font-size: 13px;
    }
  }
`;

const StyledDescArea = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding-left: 14px;
    margin-top: 20px;
    li {
      font-size: 14px;
      font-weight: 200;
      letter-spacing: 1.5px;
      color: var(--color-white);
      &::marker {
        content: '\u2022 ';
        font-size: 16px;
        color: var(--color-white);
      }
    }
  }
`;

const StyledThumbArea = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 8px;
    li {
      flex: 1 0 90px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const StyledLinks = styled.div`
  a {
    color: var(--color-lightGray);
  }
`;

const Projects = forwardRef(({ data }, ref) => {
  return (
    <StyledContainer ref={ref}>
      <StyledInner>
        <StyledContTitle>PROJECTS</StyledContTitle>

        <StyledProject>
          {data?.length > 0 &&
            data.map(
              ({ title, type, period, thumbnails, links, desc }) => (
                <StyledProjectItem key={title} type={type}>
                  <div className={'title'} style={{}}>
                    <span>{title}</span>
                  </div>
                  <div className={'period'}>
                    기간: <span>{period[0]}</span> ~{' '}
                    <span>{period[1] ?? '진행중'}</span>
                  </div>
                  {thumbnails?.length > 0 && (
                    <StyledThumbArea key={`thumbnail-${title}`}>
                      <ul>
                        {thumbnails.map(src => {
                          return (
                            <li key={src}>
                              <img src={src} alt="" />
                            </li>
                          );
                        })}
                      </ul>
                    </StyledThumbArea>
                  )}
                  {links?.length > 0 && (
                    <StyledLinks key={`links-${title}`}>
                      {links.map(link => {
                        return (
                          <div key={link}>
                            <a href={link[1]}>{link[0]}</a>
                          </div>
                        );
                      })}
                    </StyledLinks>
                  )}
                  <StyledDescArea>
                    <ul>
                      {desc?.length > 0 &&
                        desc.map((txt, idx) => (
                          <li key={`${title}-${idx}`}>{txt}</li>
                        ))}
                    </ul>
                  </StyledDescArea>
                </StyledProjectItem>
              ),
            )}
        </StyledProject>
      </StyledInner>
    </StyledContainer>
  );
});

export default Projects;
