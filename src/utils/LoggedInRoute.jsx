import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

export const LoggedInRoute = ({ component: Component, ...props }) => {
  const user = useContext(AuthContext); // contextからログインの状態を受け取る

  console.log(props); // この中身を見てみても良い

  // 基本形： <Route exact path='/' component={Room} />
  // Componentにpropsを渡せない

  // componentの書き方を変えた形： <Route exact path='/' render={(props) => <Room props={props}} />
  // Componentに渡したいものがあるときはこの書き方が良い

  // さらに,今回はrenderの中身を条件分岐したい
  // 例： <Route exact path='/' render={(props) => user ? <Room1 props={props} /> : <Room2 props={props} />} />
  // 三項演算子で条件分岐

  return (
    <Route
      {...props} // 親から受け取ったpropsを全部流す書き方
      render={props =>
        user ? (
          <Component {...props} /> // 親から受け取ったComponentのこと
        ) : (
          <Redirect to={'/login'} /> // react-routerにあるリダイレクトさせる機能を持つComponent
        )
      }
    />
  );
};

export default LoggedInRoute;
