import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Vite React Website</h1>
        <p>This is a simple website built with React and Vite.</p>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2>Home</h2>
        <p>This is the home section of the website.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Learn more about this React website built with Vite.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>You can contact us at: example@example.com</p>
      </section>

      <footer>
        <p>&copy; 2024 My Vite React Website</p>
      </footer>
    </div>
  );
}

export default App;
