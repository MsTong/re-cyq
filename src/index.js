// const app = dva({});
// app.router(require('./router').default);
// app.start('#root');
import './static/css/common.scss'

import React,{ useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import {Home} from './pages/home/index.js'
import Users from './pages/users/index.js'

function App() {
    const [ count , setCount ] = useState(0);
    return (
        <Router className="App">
            <div className="App-header">
                <Switch>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;
ReactDom.render(<App />,document.getElementById('root'))