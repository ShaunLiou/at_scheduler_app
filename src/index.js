import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Timezone from './components/header/header';
// import App from './App';
// import Demo from './components/scheduler';
// import WeekNav from './components/datetime';
import Content from './components/content/content';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


ReactDOM.render(
  <React.StrictMode>

      <div>
        {/* <WeekNav/> */}
        <Content />
        {/* <Demo /> */}
        {/* <Timezone/> */}
      </div>
     
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
