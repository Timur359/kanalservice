import React from 'react';

import '../TableList/TableList.css';

const TableItem = ({ name, children }) => {
  return (
    <>
      <div className="table__columns_body">
        {name}
        {children}
      </div>
    </>
  );
};

export default TableItem;
