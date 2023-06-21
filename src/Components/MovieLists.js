import Movie from "./Movies";
import { allmovies } from "./Constants"


const MovieList=({movieList})=>{
    console.log(movieList)
      return(
          <>
           <div className="App">
        
        {/* Movie Compoments */}
        {
          // allmovies.map((element,index)=>{
            movieList.map((element,index)=>{
          //using as an props
          //   return <Movie element={element} key={index}/>
          // spread operator
          <Movie></Movie>
          
          
          return <Movie {...element} key={index}/>
          })
        }
        
      </div>
          </>
      )
  }
  export default MovieList;