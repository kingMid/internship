import  React , { useState,useEffect }from 'react'
import './App.css';
import {BrowserRouter as Router ,Link,Route } from 'react-router-dom';
import Index from "./pages/Index";
import Msg from "./pages/Msg";

function App() {
    const [num,setNum] = useState(0);
    useEffect(()=>{
        console.log("-----APP------");
    },[num])
  return (
    <div className="App">
        <h1>this is your number{num}</h1>
        <button onClick={()=>setNum(num+1)}>click me baby</button>
        <Router>
            <ul>
                <li><Link to='/index'>Index页</Link></li>
                <li><Link to='/msg'>Msg页面</Link></li>
                <Route exact path='/index'  component={Index}></Route>
                <Route exact path='/msg'  component={Msg}></Route>
            </ul>
        </Router>

    </div>
  );
}

export default App;
