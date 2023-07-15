import React from "react"

const ColorBox=({element})=>{
  // create an object and pass it in style and check
const colorStyle={height:"50px",width:"230px",backgroundColor:element,marginBottom:"2px"}
     
    return(
        <>
       <div style={colorStyle}></div>
      
       </>
    )
}

export default ColorBox;