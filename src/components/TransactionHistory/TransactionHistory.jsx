import PropTypes from 'prop-types';
import { Tablerow, TableHeadItem, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Tablerow>{type}</Tablerow>
            <Tablerow>{amount}</Tablerow>
            <Tablerow>{currency}</Tablerow>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.proPotypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
