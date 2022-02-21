import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Tartalom } from './Tartalom';

function App() {
  return (
    <div className="App">
      <header>
      <Header/>;
      <div id='content' className='Elso-content'>
        <Tartalom  db = {3}/>;
        </div>
      
      </header>
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </body>
      <Footer/>;
      
    </div>
  );
 
}

export default App;
