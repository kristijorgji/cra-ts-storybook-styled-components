import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Example } from './components/atoms/Example';
import Light from './styles/themes/Light/Light';
import { ThemeProvider } from 'styled-components';

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={Light}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code>
                    </p>
                    <Example name={'Welcome from example component'} />
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
