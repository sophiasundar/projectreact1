import Counter from "./Counter";
import {useState} from 'react';


const Movie=({element})=>{ //destructuring 
      console.log(element)
     
      const{name,poster,rating,summary}=element  
       console.log(name,poster,rating,summary);
      
       const [show,setShow]=useState(true)  // show is variable, setShow is function.
         const toggleSummary={
            //key:value
            //display:block
            //display:none
            display:show?"block":"none"
         }
        console.log(toggleSummary.display);

        const  ratingStyle={
            color:rating>8? "green":"red"
             
        }
        
     
        return(
        <div className="movieContainer">
            <img src={poster} alt="" className="moviePoster"></img>  

           <div className="movieSpecs">
             <h4>{name}
             <button
              onClick={()=>{
                  setShow(!show)
                  console.log(show)
              }}
             
              > {show?"🔽":"🔼"}</button>   
              
              </h4>   
              <h4 style={ratingStyle}>⭐{rating}</h4>
              </div> 
             {/* { show && <p //conditional rendering is used for toggle summary
                // style={toggleSummary}
              className='movieSummary'>{summary}</p>} */}
             
               {/* ternary operator */}
            
              { show? <p className='movieSummary'>{summary}</p>:null}
              
              <Counter></Counter> 
        </div>
    )
}

export default Movie;