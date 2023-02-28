import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background: rgb(221, 125, 86);
  background: linear-gradient(
    90deg,
    rgba(221, 125, 86, 1) 9%,
    rgba(217, 101, 101, 1) 96%
  );

  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
export const ContainerContacts = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0 0 2% 2%;
  background-color: #fff;
`;
export const TitlePhonebook = styled.h1`
  margin-top: 20px;
  text-align: center;
  color: #fff;
`;

export const TitleContacts = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
`;
