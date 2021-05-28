import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './config/firebase';
import { Login, Signup, Room } from './pages'; // まとめてimportできるのはなぜか？
import { Auth, LoggedInRoute } from './utils';

function App() {
  // console.log(process.env.REACT_APP_HELOO); // .envの確認

  return (
    <Router>
      <h1>Chat App</h1>
      <ul> {/* 確認用のメニュー */}
        <li><Link to='/'>ROOM</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/signup'>SIGNUP</Link></li>
      </ul>
      <button onClick={() => auth.signOut()}>logout</button>
      <Auth>
        <Switch>
          <LoggedInRoute exact path='/' component={Room} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Auth>
    </Router>
  );
}

export default App;
