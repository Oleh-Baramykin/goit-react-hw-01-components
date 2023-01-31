import PropTypes from 'prop-types';

import {
  FriendListItemStyle,
  FriendImage,
  FriendStatus,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = friends => {
  return (
    <FriendListItemStyle>
      <FriendStatus status={friends.isOnline}></FriendStatus>
      <FriendImage src={friends.avatar} alt="User avatar" width="48" />
      <FriendName>{friends.name}</FriendName>
    </FriendListItemStyle>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
