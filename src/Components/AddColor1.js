import { useState } from "react"


const AddColor1 = () => {
       
        const [colorVal,setColorVal]=useState("red")
        
        const [colorList,setColorList]=useState([colorVal])
        console.log(colorList)

        const inputStyle={
        backgroundColor:colorVal 
         }


    return(
      <div>

       <input type="text" value={colorVal} style={inputStyle}
       onChange={(e)=>{
         console.log(e.target.value)
         setColorVal(e.target.value) 
       }}/>
 
       <button 
       onClick={()=>{
           setColorList([...colorList,colorVal])
           console.log(colorList)
       }}
       >ADD COLOR</button>
      
      {
        colorList.map((element,index)=>{
          return<div style={{height: "50px", width:"100px", backgroundcolor:element,marginBottom:"2px"}}> </div>
          })
      }
      </div>
    )
}

export default AddColor1;
