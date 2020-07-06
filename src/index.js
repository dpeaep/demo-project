import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = React.createElement("div", { className: "testClass" },
    React.createElement("h1", null, "Welcome to React Programming...."),
    React.createElement("h1", null, "Welcome understanding the creation of elements....")
);

ReactDOM.render(element, document.getElementById("root"));

//const element = (
//    <div className="testClass">
//        <h1>Welcome to React Programming.....</h1>
//        <h2>Understanding the Creation of Elements in React.....</h2>
//    </div>
//);
//ReactDOM.render(element, document.getElementById("root"));


//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
