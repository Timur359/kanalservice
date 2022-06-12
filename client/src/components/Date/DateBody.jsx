import React from 'react';

import '../TableList/TableList.css';

//Элемент колонки дата

const DateBody = ({ date }) => {
  return <td className="table__columns_body">{date}</td>;
};

export default DateBody;
