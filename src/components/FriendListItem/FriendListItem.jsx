import PropTypes from 'prop-types';

import {
  FriendListItemStyle,
  FriendImage,
  FriendStatus,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyle>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyle>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
