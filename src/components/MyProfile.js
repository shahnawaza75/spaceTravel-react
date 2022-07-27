import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missionState = useSelector((state) => state.mission);
  const joinedMission = missionState.filter((mission) => mission.joined === true);
  const rocketState = useSelector((state) => state.rocket);
  const reservedRocket = rocketState.filter((rocket) => rocket.reserved === true);

  const style = () => ({
    border: '1px solid rgb(201, 193, 193)',
    marginTop: '20px',
  });
  return (
    <div className="main-containers">
      <div className="main-con">
        <h2>My Missions</h2>
        <div style={style()}>
          {joinedMission.map((item) => (
            <p key={item.id}>{item.missionName}</p>
          ))}
        </div>
      </div>
      <div className="main-con">
        <h2>My Rockets</h2>
        <div style={style()}>
          {reservedRocket.map((item) => (
            <p key={item.id}>{item.rocketName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
