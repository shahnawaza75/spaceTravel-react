import { useDispatch } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import { missionActions } from '../redux/MissionSlice';
import './MissionList.css';

const MissionList = ({ list: mission }) => {
  const dispatch = useDispatch();
  const handliClick = () => {
    if (mission.joined) {
      dispatch(missionActions.leaveMission(mission.id));
    } else {
      dispatch(missionActions.joinMission(mission.id));
    }
  };
  const btnStyle = () => {
    const style = {
      padding: '6px',
      borderRadius: '4px',
      border: '2px solid gray',
      color: 'gray',
      backgroundColor: '#fff',
      cursor: 'pointer',
    };
    if (mission.joined) {
      style.color = 'red';
      style.border = '2px solid red';
    }
    return style;
  };
  const memberBadge = () => {
    const style = {
      backgroundColor: 'rgb(109 117 125)',
      margin: '0 2px',
      fontSize: '12px',
      textAlign: 'center',
      borderRight: '1px solid #D8D8D8',
      color: '#fff',
      borderRadius: '4px',
      width: '100px',
    };
    if (mission.joined) {
      style.backgroundColor = 'rgb(24 162 184)';
      style.fontSize = '14px';
    }
    return style;
  };
  const actionBtn = () => (
    <div className="btn-div">
      <button
        style={btnStyle()}
        type="submit"
        onClick={handliClick}
      >
        {mission.joined ? <span>Leave Mission</span> : <span>Join Mission</span>}
      </button>
    </div>
  );
  return (
    <div>
      <div className="main-container">
        <h3>{mission.missionName}</h3>
        <p className="desc">{mission.description}</p>
        <div className="status-div">
          <p
            style={memberBadge()}
          >
            {mission.joined ? <span>Active Member</span> : <span>NOT A MEMBER</span>}
          </p>
        </div>
        {actionBtn()}
      </div>
    </div>
  );
};
MissionList.propTypes = {
  list: propTypes.instanceOf(Object).isRequired,
};
export default MissionList;
