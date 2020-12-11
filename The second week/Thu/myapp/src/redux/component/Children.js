
/**
 * @Description: Children.js
 * @author zhangzhong
 * @date 2020/12/4 
*/
import React,{Component} from 'react';

class Children extends Component{

    render(){
        return (
                <div className="color" style={{background:this.props.color}}></div>
        );
    }
}

export default Children;