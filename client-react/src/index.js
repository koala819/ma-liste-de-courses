import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './Title';
import reportWebVitals from './reportWebVitals';
import AddInput from "./AddInput";
import AddButton from "./AddButton";
import Form from "./Form";
import ShoppingList from "./ShoppingList";

ReactDOM.render(
  <React.StrictMode>
      <header>
          <Title />
      </header>
      <section>
          <Form />
          <form className="flex-form">
              <AddInput />
              <AddButton />
          </form>
      </section>
      <section>
          <ShoppingList />
      </section>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
