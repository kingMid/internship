import React,{Component} from 'react';
    import {Link,Route} from "react-router-dom";

class Mine extends Component{
    render(){
        return (
            <Route path={this.props.to} children={({match})=>{
                return (
                    <span>
                        {match?"<":""}
                        <Link to={this.props.to}>{this.props.children}</Link>
                    </span>
                )
            }}>
            </Route>

        );
    }
}

export default Mine;