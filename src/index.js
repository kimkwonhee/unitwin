import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import cssVars from 'css-vars-ponyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import rootReducer from './modules';

// Default values
// cssVars({
//   // Targets
//   rootElement   : document,
//   shadowDOM     : false,

//   // Sources
//   include       : 'link[rel=stylesheet],style',
//   exclude       : '',
//   variables     : {},

//   // Options
//   onlyLegacy    : true,
//   preserveStatic: true,
//   preserveVars  : false,
//   silent        : false,
//   updateDOM     : true,
//   updateURLs    : true,
//   watch         : false,

//   // Callbacks
//   onBeforeSend: function(xhr, elm, url) {
//     // ...
//   },
//   onError: function(message, elm, xhr, url) {
//     // ...
//   },
//   onWarning: function(message) {
//     // ...
//   },
//   onSuccess: function(cssText, elm, url) {
//     // ...
//   },
//   onComplete: function(cssText, styleElms, cssVariables, benchmark) {
//     // ...
//   },
//   onFinally: function(hasChanged, hasNativeSupport, benchmark) {
//     // ...
//   }
// });

const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
