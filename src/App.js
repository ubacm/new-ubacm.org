import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UB ACM
        </p>
        <a
          className="App-link"
          href="https://discord.gg/dKyK8D27cK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Discord!
        </a>
      </header>
    </div>
  );
}

export default App;
