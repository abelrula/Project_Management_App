import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from "@reduxjs/toolkit/query/react"

 import apiSlice from "./api/apiSlice";
 import "./app.css";
 import store from "./redux/store";
 import { Provider } from "react-redux";
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
   //  <Provider store={store}>
   <ApiProvider api={apiSlice}>
     <App />
   </ApiProvider>
   //  </Provider>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 