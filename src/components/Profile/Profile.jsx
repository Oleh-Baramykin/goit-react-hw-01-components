// import ProfileItem from './сomponets/Profile.styled';
//
import PropTypes from 'prop-types';
import { ProfileItem } from './Profile.styled';
import { Description } from './Description.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileItem>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" width="300" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </ProfileItem>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
