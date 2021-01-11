import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/store";
// ************************************************************
// import store from "./store/store";
// import { addRestaurantToFavourite, removeRestaurantFromFavourite } from "./store/actions";
//
// // console.log("Store before any dispatch:", store.getState());
//
// const unsubscribe = store.subscribe(() => {
//     console.log('Current store state:', store.getState());
// });
//
// store.dispatch(addRestaurantToFavourite({name: "Cashapp", status: "Open"}));
// store.dispatch(addRestaurantToFavourite({name: "New restaurant", status: "Open"}));
// store.dispatch(removeRestaurantFromFavourite({name: "New restaurant"}));
//
// unsubscribe();
// // *************************************************************


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
