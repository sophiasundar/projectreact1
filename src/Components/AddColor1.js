import { useState } from "react"
import ColorBox from "./ColorBox"


const AddColor1 = () => {
       
        const [colorVal,setColorVal]=useState("red")
        
        const [colorList,setColorList]=useState([colorVal])
        console.log(colorList)

        const inputStyle={
        // backgroundColor:colorVal,
        height:"40px", 
        Width:"100px"
         }
 

    return(
      <div>

       <input type="text" value={colorVal} style={inputStyle}
       onChange={(e)=>{
        //  console.log(e.target.value)
         setColorVal(e.target.value) 
       }}/>
 
       <button 
       onClick={()=>{
           setColorList([...colorList,colorVal])
           console.log(colorList)
       }}
       >ADD COLOR</button>
      <ColorBox></ColorBox>
      {
        colorList.map((element,index)=>{
          return <ColorBox element={element}/>
          })
      }
      </div>
    )
}

export default AddColor1;
