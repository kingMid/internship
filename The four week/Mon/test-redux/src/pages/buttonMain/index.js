import React,{Component} from 'react';
import { Button } from "antd";
import { connect } from "react-redux";
import { addNum , reduceNum } from  './action'


class Main extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.num}</h1>
                <Button onClick={()=>{this.props.addNum()}}>+1</Button>| <Button onClick={()=>{this.props.reduceNum()}}>-1</Button>| <Button>异步的</Button>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) =>{
    return {
        addNum(){
            dispatch(addNum())
        },
        reduceNum(){
            dispatch(reduceNum())
        }

    }
};
const mapStateToProps =(state)=>{
    return {
        num : state.count.num
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Main);