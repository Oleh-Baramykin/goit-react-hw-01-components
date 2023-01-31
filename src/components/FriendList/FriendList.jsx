import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(friends => (
        <FriendListItem
          key={friends.id}
          name={friends.name}
          avatar={friends.avatar}
          status={friends.isOnline}
        />
      ))}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
