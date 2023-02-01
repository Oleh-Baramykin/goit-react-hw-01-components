import PropTypes from 'prop-types';

import { Cards, Docs, DocsValue, Text, CardsItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <div>
      {title && <Text>{title}</Text>}
      <CardsItem>
        {stats.map(({ id, label, percentage }) => (
          <Cards key={id} label={label}>
            <Docs>{label}</Docs>
            <DocsValue>{percentage}%</DocsValue>
          </Cards>
        ))}
      </CardsItem>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
