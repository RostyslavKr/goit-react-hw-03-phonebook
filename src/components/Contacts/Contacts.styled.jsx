import styled from '@emotion/styled';

export const WrapperContacts = styled.div``;

export const ItemContact = styled.li`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  &:nth-of-type(even) {
    background-color: #f6f8fa;
  }
`;
