/**
 * @Description: App.js
 * @author zhangzhong
 * @date 2020/12/1
*/
import '../Css/App.css';
import React,{Component} from "react";
import Plate from "./Plate";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            wishNum:100
        }
    }
    render(){
        return (
            <div className="app">
                <div className="appheader">
                    <p className="restdraw">今日还有{this.state.wishNum/5}次抽奖机会</p>
                    <p className='rest'>剩余{this.state.wishNum}心愿</p>
                </div>
                <Plate/>
                <div className="bottom">
                    <p>中奖记录 ></p>
                </div>
            </div>
        );
    }
}


export default App;
