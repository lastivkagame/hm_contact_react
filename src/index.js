import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ContactBody from "./components/ContactsBody";


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <ContactBody />
      </div>
    );
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));