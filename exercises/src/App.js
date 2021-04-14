import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Exercise from './components/exercise';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <h1>Hello World</h1>
                </Route>
                <Route path='/exercises/:exerciseNumber'>
                    <Exercise />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
