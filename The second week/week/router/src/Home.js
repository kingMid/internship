import React,{Component} from 'react';
import './Home.css'
import Fined from "./component/Fined/Fined";
import Mine from './component/Mine/Mine'
import Msg from "./component/Msg/Msg";
import {BrowserRouter as Router,Link,Route,Redirect,Prompt,NavLink} from "react-router-dom";
import Homee from './component/Homee'
import redire from './component/redire'
import Button from "./component/Button";

class Home extends Component{
    render(){
        return (
            <div className="home">
                <Router>
                    <Button></Button>
                    <NavLink exact to='/'>首页</NavLink>|
                    <NavLink to="/fined">Fined</NavLink>|
                    <Mine to="/e">e</Mine>|
                    <Mine to="/f">f</Mine>|
                    <NavLink to="/c">c</NavLink>|
                    <NavLink to="/msg">Msg</NavLink>|
                    <Link to="/children">children</Link>
                    {/*<Switch>*/}
                    <Route exact path="/" component={Homee}></Route>
                    <Route exact path='/fined' component={Fined}></Route>
                    <Route exact path='/c' render={
                        () => {
                            return <Redirect to="/redire"></Redirect>
                        }
                    }></Route>
                    <Route exact path='/e' render={() => <h1>eeeeeeee</h1>}></Route>
                    <Route exact path='/f' render={() => <h1>ffffffff</h1>}></Route>
                    <Route exact path='/msg' component={Msg}></Route>
                    <Route exact path='/redire' component={redire}></Route>
                    <Prompt when={true} message="确定要跳转吗？"></Prompt>


                    <Route path='/children' children={
                        (props) => {
                            console.log(props.match)
                            return <h2>children</h2>
                        }
                    }></Route>
                    {/*</Switch>*/}

                </Router>
            </div>
        );
    }
}

export default Home;