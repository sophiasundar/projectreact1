import {useState} from 'react'  // usestate is a hook, created  by FB developer we make use of it.    

const Counter=()=>{

//    let like=0;
     //destructuring
   const [like,setLike]=useState(0) //initial value
   const [disLike,setDislike]=useState(0)
   // state = variable
   // setstate => function=> responsible for updating value of the state variable
    return(
        <>
        <div className="counter">
              {/* <h1>Counter</h1> */}
              <button  className="likeButton" 
              onClick={()=>{
                //    like++
                //    console.log(like)
                   setLike(like+1)
              }}>👍 {like}</button>
              <button  className="dislikeButton"    //dislike button
              onClick={
                ()=>{
                setDislike(disLike+1)
              }}>👎 {disLike}</button>
        </div>
        </> 
    )
}
export default Counter;