import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);

  return (
    <div>
      {rockets.map((item) => (
        <RocketCard
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};
export default Rockets;
