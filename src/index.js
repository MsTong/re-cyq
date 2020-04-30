// const app = dva({});
// app.router(require('./router').default);
// app.start('#root');
import './static/css/common.scss'
import React,{ useState } from 'react';
import ReactDom from 'react-dom';
function App() {
    const [ count , setCount ] = useState(0);
    return (
        <div className="red">dddddd{count}</div>
    )
}
export default App;
ReactDom.render(<App />,document.getElementById('root'))