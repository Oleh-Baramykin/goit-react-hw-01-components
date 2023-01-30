// import ProfileItem from './сomponets/Profile.styled';
//
import PropTypes from 'prop-types';

import {
  Description,
  ProfileItem,
  Name,
  Tag,
  Location,
  Img,
  Stats,
  StatsItem,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileItem>
      <Description>
        <Img src={avatar} alt="User avatar" width="150" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </StatsItem>
      </Stats>
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
