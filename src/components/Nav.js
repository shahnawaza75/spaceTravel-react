import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const style = () => (
    {
      textDecoration: 'none',
      color: 'blue',
    }
  );
  return (
    <ul className="nav-items">
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline', color: 'rgb(124 166 215' }} to="/rockets">Rockets</NavLink></li>
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline', color: 'rgb(124 166 215' }} to="/missions">Missions</NavLink></li>
      <li><NavLink style={style} activeStyle={{ textDecoration: 'underline', color: 'rgb(124 166 215' }} to="/profile">My Profile</NavLink></li>
    </ul>
  );
};
export default Nav;
