import styled from '@emotion/styled';

export const FriendListItemStyle = styled.li`
  list-style: none;
  margin: 15px 0;
  display: flex;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export const FriendImage = styled.img`
  margin-right: 20px;
  margin-left: 20px;
`;

export const FriendName = styled.p`
  margin: 10px 0;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  display: flex;
  text-align: center;
  border-radius: 50%;
  background-color: ${prop => (prop.status ? 'green' : 'red')};
`;
