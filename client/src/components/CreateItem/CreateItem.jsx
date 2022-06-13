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
    <div className="create-item">
      <h2 className="create-item__title">Создание элемента таблицы</h2>
      <div className="create-item__body">
        <p className="create-item__name-field">Name: </p>
        <input
          type="text"
          pattern="[A-Za-zА-Яа-яЁё]"
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите наименование..."
        />
        <p className="create-item__name-field">Amount:</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите количество..."
          maxLength="8"
        />
        <p className="create-item__name-field">Distance:</p>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Введите расстояние..."
          maxLength="8"
        />
        <button onClick={createTableItem} className="create-item__button">
          <p>Добавить</p>
        </button>
      </div>
    </div>
  );
};

export default CreateItem;
