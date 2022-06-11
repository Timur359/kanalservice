import React, { useEffect, useState } from 'react';
import Amount from '../Amount/Amount';
import Date from '../Date/Date';
import Distance from '../Distance/Distance';
import Name from '../Name/Name';

import './TableList.css';

const TableList = () => {
  const products = [
    { id: 1, date: '09.06.2022', name: 'Timur', amount: 22, distance: 170 },
    { id: 2, date: '09.06.2022', name: 'Daria', amount: 30, distance: 180 },
    { id: 3, date: '09.06.2022', name: 'Alex', amount: 27, distance: 190 },
    { id: 4, date: '09.06.2022', name: 'Oleg', amount: 72, distance: 140 },
    { id: 5, date: '09.06.2022', name: 'Yari', amount: 41, distance: 130 },
  ];

  const [lists, setList] = useState(products);

  const [nameValue, setNameValue] = useState('');

  const [amountValue, setAmountValue] = useState('');
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(10000);

  const [distanceValue, setDistanceValue] = useState('');

  const filterName = (value) => {
    setNameValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...lists].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...lists].sort((a, b) => b.name.localeCompare(a.name)));
    }
  };

  const filterAmount = (value) => {
    setAmountValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...lists].sort((a, b) => a.amount - b.amount));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...lists].sort((a, b) => b.amount - a.amount));
    }
  };

  const filterDistance = (value) => {
    setDistanceValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...lists].sort((a, b) => a.distance - b.distance));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...lists].sort((a, b) => b.distance - a.distance));
    }
  };

  const applyFilters = () => {
    let updateList = products;

    updateList = updateList.filter(
      (item) => item.amount >= minAmount && item.amount <= maxAmount
    );
    setList(updateList);
  };

  useEffect(() => {
    applyFilters();
  }, [minAmount, maxAmount]);

  return (
    <table>
      <caption>Тестовое задание</caption>
      <thead>
        <tr>
          <th>Date</th>
          <th>
            Name{' '}
            <select
              value={nameValue}
              onChange={(e) => filterName(e.target.value)}
            >
              <option>Cортировка</option>
              <option value={'больше'}>По возрастанию</option>
              <option value={'меньше'}>По убыванию</option>
            </select>
          </th>
          <th>
            Amount{' '}
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
            от:
            <input
              type="number"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
            />
            до:
            <input
              type="number"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
            />
          </th>
          <th>
            Distance{' '}
            <select
              value={distanceValue}
              onChange={(e) => filterDistance(e.target.value)}
            >
              <option>Cортировка</option>
              <option value={'больше'}>По возрастанию</option>
              <option value={'меньше'}>По убыванию</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody>
        {lists.map((list) => (
          <tr key={list.id}>
            <Date date={list.date} />
            <Name name={list.name} />
            <Amount amount={list.amount} />
            <Distance distance={list.distance} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
