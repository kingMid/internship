import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Button extends Component{
    render(){
        return (
            <button onClick={()=>this.props.history.go(-1)}>
                我是普通组件我返回上一级
            </button>
        );
    }
}

export default withRouter(Button) ;