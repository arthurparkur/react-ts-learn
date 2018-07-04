import * as React from 'react';
import './App.css';
import Navigation from './components/navi/Navigation';

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Navigation/>
            </React.Fragment>
        );
    }
}

export default App;
