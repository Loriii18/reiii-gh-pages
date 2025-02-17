import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Your Name], a passionate web developer.</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I'm a web developer with experience in React, JavaScript, and more.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1:</strong> A web app built using React.
          </li>
          <li>
            <strong>Project 2:</strong> Another web project showcasing my skills.
          </li>
        </ul>
      </section>

      <footer>
        <p>Contact: your.email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
