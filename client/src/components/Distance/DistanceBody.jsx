import React from 'react';

import '../TableList/TableList.css';

//Элемент колонки расстояние

const DistanceBody = ({ distance }) => {
  return <td className="table__columns_body">{distance}</td>;
};

export default DistanceBody;
