import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input , Button ,List} from "antd";
import store from "../../redux";



class Main extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange)

    }
    changeInputValue(e){
        const action = {
            type: 'CHANGE_INPUT',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        console.log('sdasda5465445')
        this.setState(store.getState())
    }
    clickBtn(){
        const action = {type: 'ADD_ITEM'}
        store.dispatch(action)
    }
    render(){
        return (
            <div className="main" style={{width:'400px',margin:"20px auto"}}>
                <div className="input">
                    <Input
                        placeholder ={this.state.inputValue}
                        style={{width:'250px',marginRight:'10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button
                        type="primary"
                        onClick = {this.clickBtn}
                    > 添加</Button>
                </div>
                <div className="list-box" style={{width:"250px" ,marginTop:'20px'}}>
                    <List
                        bordered
                        dataSource = {this.state.list}
                        renderItem = {item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default Main;