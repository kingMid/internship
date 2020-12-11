import React,{Component} from 'react';

class Fined extends Component{
constructor(props){
    super(props);
}
    render(){

        return (
            <div>
                {console.log(this.props)}
                这是Fined页面
                <button onClick={()=>this.props.history.push('/')}>跳转到首页</button>
            </div>
        );
    }
}

export default Fined;