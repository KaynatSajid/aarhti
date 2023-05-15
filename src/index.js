import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';

// redux
import { Provider } from "react-redux";
import store from "./redux/index";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const initialState = {
    isLoggedIn: true, cart: [], items: []
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
