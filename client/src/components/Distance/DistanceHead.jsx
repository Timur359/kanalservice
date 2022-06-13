import React from 'react';

import '../TableList/TableList.css';

const DistanceHead = ({
  distanceValue,
  minDistance,
  setMinDistance,
  maxDistance,
  setMaxDistance,
  setDistanceValue,
  table,
  setList,
}) => {
  //Фильтрация больше или меньше для столбца расстояния

  const filterDistance = (value) => {
    setDistanceValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...table].sort((a, b) => a.distance - b.distance));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...table].sort((a, b) => b.distance - a.distance));
    }
  };
  return (
    <div className="table__columns_head">
      <p>Distance</p>{' '}
      <select
        value={distanceValue}
        onChange={(e) => filterDistance(e.target.value)}
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
        value={minDistance}
        onChange={(e) => setMinDistance(e.target.value)}
        placeholder="от..."
        minLength={8}
      />
      <p>до:</p>
      <input
        type="number"
        value={maxDistance}
        onChange={(e) => setMaxDistance(e.target.value)}
        placeholder="до..."
        minLength={8}
      />
    </div>
  );
};

export default DistanceHead;
