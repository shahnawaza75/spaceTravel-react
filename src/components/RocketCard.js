import propTypes from 'prop-types';
import './RocketCard.css';
import { useDispatch } from 'react-redux';
import { rocketActions } from '../redux/RocketSlice';

const RocketCard = ({ data: rocket }) => {
  const dispatch = useDispatch();
  const {
    id, rocketName, description, flickrImages,
  } = rocket;

  const clickHandler = () => {
    if (rocket.reserved) {
      dispatch(rocketActions.cancelReserve(id));
    } else {
      dispatch(rocketActions.reserved(id));
    }
  };

  const btnStyle = () => {
    const style = {
      padding: '8px',
      marginTop: '20px',
      backgroundColor: 'rgb(0 123 255)',
      border: 'none',
      color: '#fff',
      borderRadius: '4px',
    };
    if (rocket.reserved) {
      style.color = 'rgb(133 139 146';
      style.backgroundColor = '#fff';
      style.border = '1px rgb(133 139 146) solid';
    }
    return style;
  };
  return (
    <div className="rocket-card">
      <img style={{ width: '200px' }} src={flickrImages} alt="" />
      <div>
        <h3>{rocketName}</h3>
        <div className="para">
          {rocket.reserved && <p className="reserved">Reserved</p>}
          <p className="descr">{description}</p>
        </div>
        {!rocket.reserved ? (
          <button
            style={btnStyle()}
            onClick={clickHandler}
            type="submit"
          >
            Reserve Rocket
          </button>
        ) : <button style={btnStyle()} onClick={clickHandler} type="submit">Cancel Reservation</button>}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
export default RocketCard;
