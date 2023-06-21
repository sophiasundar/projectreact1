import Counter from "./Counter";

const Movie=({element})=>{ //destructuring 
      console.log(element)
    //  const{name,poster,rating,summary}=element     {element.name}

    return(
        <div className="movieContainer">
            
            <img src="" alt=""></img>  
             <h4>
             <button>🔽</button>   
              <Counter></Counter> 
              </h4> 
              <h4>⭐</h4>
              <p></p>
        </div>
    )
}

export default Movie;