import React from 'react';
import App from './App';
import './index.css';
import {createRoot} from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// ReactDom.render(<App/>, document.querySelector("#root"));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
    <App />
);