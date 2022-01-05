import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
