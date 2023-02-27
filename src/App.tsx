import reactLogoDark from './assets/react-dark.png';
import reactLogoDefault from './assets/react-light.svg';
import './App.css';
import { useThemeContext } from './ThemeProvider/context';

function App() {
  const { isDarkTheme, changeTheme } = useThemeContext();

  return (
    <div
      data-testid="main-container"
      className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={isDarkTheme ? reactLogoDark : reactLogoDefault}
            className="logo react"
            alt={isDarkTheme ? 'dark' : 'light'}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={changeTheme}>
          Change to {isDarkTheme ? 'light' : 'dark'} theme
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
