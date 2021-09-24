import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
