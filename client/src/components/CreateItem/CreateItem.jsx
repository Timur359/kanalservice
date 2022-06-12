import React from 'react';

import './CreateItem.css';

//Сбор данных из инпута, для создания элемента таблицы. В идеале, добавить валидацию для более корректной сортировки по имени

const CreateItem = ({
  name,
  amount,
  distance,
  setName,
  setAmount,
  setDistance,
  createTableItem,
}) => {
  return (
    <td>
      <div className="create-item">
        <p>Name: </p>
        <input
          type="text"
          pattern="[A-Za-z]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите наименование..."
        />
        <p>Amount:</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите количество..."
        />
        <p>Distance:</p>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Введите расстояние..."
        />
        <button onClick={createTableItem} className="create-item__button">
          <p>Добавить</p>
        </button>
      </div>
    </td>
  );
};

export default CreateItem;
