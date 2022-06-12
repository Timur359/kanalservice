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
  //Фильтрация больше или меньше для расстояния

  const filterDistance = (value) => {
    setDistanceValue(value);
    if (value.toLowerCase() === 'больше') {
      setList([...table].sort((a, b) => a.distance - b.distance));
    } else if (value.toLowerCase() === 'меньше') {
      setList([...table].sort((a, b) => b.distance - a.distance));
    }
  };
  return (
    <th className="table__columns_head">
      Distance{' '}
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
      от:
      <input
        type="number"
        value={minDistance}
        onChange={(e) => setMinDistance(e.target.value)}
        placeholder="от..."
        minLength={8}
      />
      до:
      <input
        type="number"
        value={maxDistance}
        onChange={(e) => setMaxDistance(e.target.value)}
        placeholder="до..."
        minLength={8}
      />
    </th>
  );
};

export default DistanceHead;
