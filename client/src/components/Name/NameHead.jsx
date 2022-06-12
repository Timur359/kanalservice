import React from 'react';

import '../TableList/TableList.css';

const NameHead = ({
  nameValue,
  inputSearchName,
  setInputNameSearch,
  setList,
  setNameValue,
  table,
}) => {
  //Фильтрация "больше" или "меньше" для имени

  const filterName = (value) => {
    setNameValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...table].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...table].sort((a, b) => b.name.localeCompare(a.name)));
    }
  };
  return (
    <th className="table__columns_head">
      Name{' '}
      <select value={nameValue} onChange={(e) => filterName(e.target.value)}>
        <option disabled value="">
          Cортировать по:
        </option>
        <option value={'больше'}>По возрастанию</option>
        <option value={'меньше'}>По убыванию</option>
      </select>
      Поиск
      <input
        type="text"
        value={inputSearchName}
        onChange={(e) => setInputNameSearch(e.target.value)}
        placeholder="Найти..."
      />
    </th>
  );
};

export default NameHead;
