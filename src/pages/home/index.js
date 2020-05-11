import React,{ useState, createContext } from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Counter from "../../components/mybutton.js"
const CountContext = createContext()
function Home() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <div>home</div>

            <Button type="primary" style={{ marginLeft: 8 }}>
                <Link to="/users">to user</Link>
            </Button>
            <CountContext.Provider value={count}></CountContext.Provider>
            <Counter/>
        </div>
    )
}
export {CountContext,Home};
