import React from 'react';

import '../TableList/TableList.css';

const AmountHead = ({
  amountValue,
  minAmount,
  maxAmount,
  setMinAmount,
  setMaxAmount,
  table,
  setList,
  setAmountValue,
}) => {
  //Фильтрация больше или меньше для столбца количества

  const filterAmount = (value) => {
    setAmountValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...table].sort((a, b) => a.amount - b.amount));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...table].sort((a, b) => b.amount - a.amount));
    }
  };
  return (
    <div className="table__columns_head">
      <p>Amount</p>{' '}
      <select
        value={amountValue}
        onChange={(e) => filterAmount(e.target.value)}
      >
        <option disabled value="">
          Cортировать по:
        </option>
        <option value={'больше'}>По возрастанию</option>
        <option value={'меньше'}>По убыванию</option>
      </select>
      <p>от:</p>
      <input
        type="number"
        value={minAmount}
        onChange={(e) => setMinAmount(e.target.value)}
        placeholder="от..."
        minLength={8}
      />
      <p>до:</p>
      <input
        type="number"
        value={maxAmount}
        onChange={(e) => setMaxAmount(e.target.value)}
        placeholder="до..."
        maxLength={8}
      />
    </div>
  );
};

export default AmountHead;
