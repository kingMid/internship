/**
 * @Description: Plate.js
 * @author zhangzhong
 * @date 2020/12/1
 */
import React,{Component} from 'react';
import '../Css/Plate.css'
import Msg from "./Msg";

class Plate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '张**',
            flag:0,
            list: [
                {name: '华为手机',probability: 0.1,id: 1,imgSrc: './image/1.jpg'},
                {name: '苹果手机',probability: 0.1,id: 2,imgSrc: './image/2.jpg'},
                {name: '游戏键盘',probability: 0.1,id: 3,imgSrc: './image/3.jpg'},
                {name: '小吃零食',probability: 0.1,id: 4,imgSrc: './image/4.jpg'},
                {name: '点击抽奖',tem: 5,id: 5,},
                {name: '女性口红',probability: 0.1,id: 6,imgSrc: './image/6.jpg'},
                {name: '卫生纸抽',probability: 0.1,id: 7,imgSrc: './image/7.jpg'},
                {name: '收纳笔袋',probability: 0.1,id: 8,imgSrc: './image/8.jpg'},
                {name: '谢谢参与',probability: 0.1,id: 9,imgSrc: './image/9.jpg'}
            ],
            msg: [
                {name: '张**仲',content: '苹果手机'},
                {name: '霍**利',content: '游戏键盘'},
                {name: '陆**豪',content: '女性口红'},
            ],

        }
        this.genRes = this.genRes.bind(this);
        this.rand = this.rand.bind(this);
        this.getRes = this.getRes.bind(this)
    }

    getRes(msg){

        let arr = this.state.msg;
        arr.unshift({name: this.state.username,content: msg})
        setTimeout(() => {
            this.setState({
                msg: arr
            })
        },2000)
    }

    genRes(){
        let num = this.rand(100)
        this.setState({
                    flag:this.state.flag+1
                })

        console.log(num)
        if (num === 100){
            this.getRes('苹果手机')
        } else if (num > 95 && num < 100){
            this.getRes('华为手机')
        } else if (num > 85 && num <= 95){
            this.getRes('游戏键盘')

        } else if (num > 75 && num <= 85){
            this.getRes('女性口红')

        } else if (num > 60 && num <= 75){
            this.getRes('小吃零食')

        } else if (num > 40 && num <= 60){
            this.getRes('卫生纸抽')

        } else if (num > 20 && num <= 40){
            this.getRes('收纳笔袋')

        } else if (num > -1 && num <= 20){
            alert('谢谢参与')
        }
    }

    rand(n){
        return (Math.floor(Math.random()*n+1));
    }

    render(){
        return (
            <div className="plate">
                <ul>{
                    this.state.list.map((item,index) => {
                        if (item.id !== 5){
                            return (<li key={index} style={item.id===this.state.flag?{background:"red"}:{background:"#ffde8d"}}>
                                <div className="box">
                                    <img src={item.imgSrc} alt=""/>
                                    <p className="boxtext">{item.name}</p>
                                </div>
                            </li>)
                        } else{
                            return (<li key={index} onClick={() => this.genRes()}>
                                <div className="boxBut">
                                    <p className="boxtext">{item.name}</p>
                                    <span>消耗{item.tem}心愿</span>
                                </div>
                            </li>)

                        }
                    })
                }
                </ul>
                <Msg msg={this.state.msg}/>
            </div>
        );
    }
}


export default Plate;