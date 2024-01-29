import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { send } from 'emailjs-com';

const StyledContainer = styled.div`
  background-color: var(--color-lightGray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInner = styled.div`
  max-width: 800px;
  width: calc(100% - 40px);
  padding: 70px 20px;
  margin: 0 auto;
`;

const StyledContTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: var(--color-secondary);
`;

const StyledContDesc = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: var(--color-gray);
`;

const StyledContEmail = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

const StyledFormArea = styled.div`
  padding-top: 32px;
  max-width: 500px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const StyledInput = styled.input`
  height: 32px;
  border-color: var(--color-secondary);
  border-width: 2px;
  font-size: 16px;
  padding: 8px;
  &:focus {
    border-color: var(--color-secondary);
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  min-height: 300px;
  border-color: var(--color-secondary);
  border-width: 2px;
  font-size: 16px;
  &:focus {
    border-color: var(--color-secondary);
    border-width: 2px;
    outline: none;
  }
`;

const StyledButton = styled.button`
  height: 52px;
  margin-top: 16px;
  color: var(--color-black);
  font-weight: 700;
  font-size: 18px;
  background-color: var(--color-primary);
  border: 0 none;
  &:focus-visible,
  &:hover {
    background-color: var(--color-secondary);
    color: white;
    outline: none;
  }
`;

const Contact = forwardRef((_, ref) => {
  const [toSend, setToSend] = useState({
    name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log('tosend', toSend);
    // todo 유효성 검사 넣기
    send(
      'service_portfolio',
      'template_iwnotf7',
      toSend,
      'm11aT_y5TtutIpFrn',
    )
      .then(r => {
        console.log('success', r.status, r.text);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <StyledContainer ref={ref}>
      <StyledInner>
        <StyledContTitle>CONTACT ME</StyledContTitle>
        <StyledContDesc>
          좀 더 소통을 원하시면 아래 주소로 메일 보내주세요 :)
        </StyledContDesc>
        <StyledContEmail>
          mynameischoisunhwa@gmail.com
        </StyledContEmail>
        <StyledFormArea>
          <form action="post" onSubmit={onSubmit}>
            <StyledInput
              type="text"
              name="name"
              placeholder="이름"
              value={toSend.name}
              onChange={handleChange}
            />
            <StyledTextarea
              type="text"
              name="message"
              placeholder="전달할 내용"
              value={toSend.message}
              onChange={handleChange}
            />
            <StyledInput
              type="text"
              name="reply_to"
              placeholder="이메일 주소"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <StyledButton type="submit">보내기</StyledButton>
          </form>
        </StyledFormArea>
      </StyledInner>
    </StyledContainer>
  );
});

export default Contact;
