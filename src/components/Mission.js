import React from 'react';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';
import './Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.mission);

  return (
    <div>
      <div className="main">
        <div className="mission-title">
          <h3 className="title-mission">Mission</h3>
          <h3 className="title-desc">Description</h3>
          <h3 className="title-status">Status</h3>
        </div>
        {missions.map((mission) => (
          <MissionList key={mission.id} list={mission} />
        ))}
      </div>
    </div>
  );
};

export default Mission;
