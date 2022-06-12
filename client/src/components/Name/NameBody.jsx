import React from 'react';

import '../TableList/TableList.css';

//Элемент колонки наименование

const NameBody = ({ name }) => {
  return <td className="table__columns_body">{name}</td>;
};

export default NameBody;
