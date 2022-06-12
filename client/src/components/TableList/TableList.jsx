import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AmountBody from '../Amount/AmountBody';
import AmountHead from '../Amount/AmountHead';
import CreateItem from '../CreateItem/CreateItem';
import DateBody from '../Date/DateBody';
import DateHeader from '../Date/DateHeader';
import DistanceBody from '../Distance/DistanceBody';
import DistanceHead from '../Distance/DistanceHead';
import NameBody from '../Name/NameBody';
import NameHead from '../Name/NameHead';

import './TableList.css';

//Константа порта для бэкенда.

export const base_url = 'http://localhost:8080/api/table';

//Основной элемент со всей логикой. Функционал и отрисовка таблицы

const TableList = () => {
  const [table, setTable] = useState([]);

  const [lists, setList] = useState([]);

  const [nameValue, setNameValue] = useState('');
  const [inputSearchName, setInputNameSearch] = useState('');

  const [amountValue, setAmountValue] = useState('');
  const [minAmount, setMinAmount] = useState(1);
  const [maxAmount, setMaxAmount] = useState(10000000);

  const [distanceValue, setDistanceValue] = useState('');
  const [minDistance, setMinDistance] = useState(1);
  const [maxDistance, setMaxDistance] = useState(10000000);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [distance, setDistance] = useState('');

  //Отрисовка элементов при запуске

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const { data: responce } = await axios.get(base_url);
        setTable(responce);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchTable();
  }, []);

  console.log(table);

  //Создание элементов

  const createTableItem = async () => {
    try {
      const newItem = await axios.post(base_url, {
        name,
        amount,
        distance,
      });
      setTable([...table, newItem.data]);
      setName('');
      setAmount('');
      setDistance('');
    } catch (err) {
      console.error(err.message);
    }
  };

  //Удаление элементов

  const deleteTableItem = async (id) => {
    try {
      const deleteItem = await axios.delete(`${base_url}/${id}`);
      setTable(table.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //Реализация поиска и значений "от" и "до"

  const applyFilters = () => {
    let updateList = table;

    if (minAmount || maxAmount) {
      updateList = updateList.filter(
        (item) =>
          Number(item.amount) >= minAmount && Number(item.amount) <= maxAmount
      );
    }
    if (minDistance || maxDistance) {
      updateList = updateList.filter(
        (item) =>
          Number(item.distance) >= minDistance &&
          Number(item.distance) <= maxDistance
      );
    }
    if (inputSearchName) {
      updateList = updateList.filter((item) => {
        return item.name.toLowerCase().includes(inputSearchName.toLowerCase());
      });
    }
    setList(updateList);
  };

  useEffect(() => {
    applyFilters();
  }, [minAmount, maxAmount, minDistance, maxDistance, inputSearchName, table]);

  return (
    <table className="table">
      <caption>Тестовое задание</caption>
      <thead>
        <tr className="table">
          <CreateItem
            name={name}
            amount={amount}
            distance={distance}
            setName={setName}
            setAmount={setAmount}
            setDistance={setDistance}
            createTableItem={createTableItem}
          />
        </tr>
        <tr>
          <DateHeader />
          <NameHead
            nameValue={nameValue}
            inputSearchName={inputSearchName}
            setInputNameSearch={setInputNameSearch}
            setList={setList}
            setNameValue={setNameValue}
            table={table}
          />
          <AmountHead
            amountValue={amountValue}
            minAmount={minAmount}
            setMinAmount={setMinAmount}
            maxAmount={maxAmount}
            setMaxAmount={setMaxAmount}
            table={table}
            setList={setList}
            setAmountValue={setAmountValue}
          />
          <DistanceHead
            distanceValue={distanceValue}
            minDistance={minDistance}
            setMinDistance={setMinDistance}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
            setDistanceValue={setDistanceValue}
            table={table}
            setList={setList}
          />
        </tr>
      </thead>
      <tbody>
        {lists.map((list, i) => (
          <tr className="table__columns" key={i}>
            <DateBody date={list.date} />
            <NameBody name={list.name} />
            <AmountBody amount={list.amount} />
            <DistanceBody distance={list.distance} />
            <td>
              <button
                className="table__button"
                onClick={() => deleteTableItem(list.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
