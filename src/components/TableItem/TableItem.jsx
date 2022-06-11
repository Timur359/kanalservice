import React from 'react';
import Amount from '../Amount/Amount';
import Date from '../Date/Date';
import Distance from '../Distance/Distance';
import Name from '../Name/Name';

const TableItem = ({ list }) => {
  return (
    <div>
      <Date date={list.date} />
      <Name name={list.name} />
      <Amount amount={list.amound} />
      <Distance distance={list.distance} />
    </div>
  );
};

export default TableItem;
