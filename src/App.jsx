import firebase from './firebaseConfig';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Room from './Room';
import Signup from './Signup';
import Login from './Login';

function App() {
  // console.log(process.env.REACT_APP_HELOO);
  // firebase.firestore().collection('user').doc('adSxZYf1PLDh4Qlpo0ae').get().then((doc) => console.log(doc.id));
  return (
    <Router>
      <h1>Chat App</h1>
      <ul>
        <li><Link to='/'>ROOM</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/signup'>SIGNUP</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Room} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
