import React from 'react';
import ReactDOM from 'react-dom';
import Context, { FirebaseContext} from './store/context'
import firebase from './firebase/config'
import App from './App';


ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
  <Context>
      <App />
  </Context>
   
</FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

