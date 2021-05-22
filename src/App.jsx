import firebase from './firebaseConfig';

function App() {
  console.log(process.env.REACT_APP_HELOO);
  firebase.firestore().collection('user').doc('adSxZYf1PLDh4Qlpo0ae').get().then((doc) => console.log(doc.id));
  return (
    <div className="App">
      <h1>Chat App</h1>
    </div>
  );
}

export default App;
