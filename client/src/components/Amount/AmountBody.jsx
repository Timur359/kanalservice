import React from 'react';

import '../TableList/TableList.css';

//Элемент колонки количество

const AmountBody = ({ amount }) => {
  return <td className="table__columns_body">{amount}</td>;
};

export default AmountBody;
