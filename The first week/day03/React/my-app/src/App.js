import React,{Component} from 'react'
import Table from "./Table";
import ToDolist from "./ToDolist";


const Hello = (props) => {
    return (
        <div>
            <h1>Hello React {props.name}</h1>
            <h2>{props.content}</h2>
        </div>
    )
}

class App extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            num: 10,
            name: "zhangzhong",
            age: 24
        }
        this.setNum = this.setNum.bind(this);
    }

    setNum(){
        this.setState({
                num: this.state.num+1
            });
        console.log("ssss");
    }


    render(){
        return (
            <div className="App">
                <h1>Hello React!</h1>
                <h2>My name is {this.state.name} </h2>
                <p>{this.props.name}</p>
                <button onClick={this.num}>+1</button>
                {this.state.num}
                <Table/>
                <Hello name="我是普通函数，父子传值" content=" 哈哈"> </Hello>
                <ToDolist />
            </div>
        )
    }
}
export default App