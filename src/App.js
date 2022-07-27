import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/missions">
          <Mission />
        </Route>
        <Route exact path="/profile">
          <MyProfile />
        </Route>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route exact path="/">
          <Rockets />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
