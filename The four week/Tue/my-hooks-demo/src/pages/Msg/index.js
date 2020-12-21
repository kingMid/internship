import React,{useState,useEffect} from 'react'


function Msg (){
    const [num ,setNum] = useState(100);
    const flag = 100;
    useEffect(()=>{
        console.log("---->hi, i am Message page useEffect !");
        return ()=> console.log("Msg----Msg----Msg,慢走不送了雷");
    },[flag])
    return (
        <div>
            <h1>this is Index page</h1>
            <h5>this my num { num }</h5>
            <button onClick={()=>{ setNum( num -5) }}> click me baby! </button>
        </div>
    )
}
export  default  Msg