import React from 'react';
import { Button } from 'antd';
import './App.css';
import Home from "./components/Home";

const App = () => (
    <div className="App">
        <Button type="primary">Button</Button>
        <Home></Home>
    </div>
);

export default App;