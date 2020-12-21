import React,{useState,useEffect} from 'react'


function Index (){
    const [num ,setNum] = useState(0);
    const flag = 666;
    useEffect(()=>{
        console.log("+++>hi, i am Index page useEffect !");
        return ()=> console.log("Index----Index----Index,拜拜了您勒");
    })
   return (
       <div>
           <h1>this is Index page</h1>
           <h5>this my num { num }</h5>
           <button onClick={()=>{ setNum( num +5) }}> click me baby! </button>
       </div>
   )
}
export  default  Index