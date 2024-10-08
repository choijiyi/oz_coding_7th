import { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>

          {/* Expense From */}
          <div
            style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}
          ></div>

          {/* Expense List */}
          <div
            style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}
          ></div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              marginTop: '1rem',
            }}
          >
            <p style={{ fontSize: '2rem' }}>총합계:</p>
          </div>
        </div>
      </main>
    );
  }
}
