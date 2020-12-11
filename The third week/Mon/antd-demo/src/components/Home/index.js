import React,{Component} from 'react';
import {Button} from "antd"


class Home extends Component{
    render(){
        return (
               <div>
                   <Button type="dashed">Dashed Button</Button>
                   <br />
                   <Button type="text">Text Button</Button>
                   <Button type="link">Link Button</Button>
               </div>
        );
    }
}

export default Home;