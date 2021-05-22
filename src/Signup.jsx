import React, { useState } from 'react';
import firebase from './firebaseConfig';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('送信するよ');
    const get = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // .then((aaaa) => {
    //   console.log(aaaa);
    //   return 'aaaiiiiii';
    // })
    // .catch((error) => console.log(error));
    console.log(get);
  };

  return (
    <div>
      <h1>アカウント新規作成画面</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name='password' />
        <input type="password" name='password' />
        <input type="password" name='password' />
        <input type="password" name='password' />
        <input type="password" name='password' />
        <br />
        <button type='submit'>新規作成</button>
      </form>
    </div>
  );
};

export default Signup;
