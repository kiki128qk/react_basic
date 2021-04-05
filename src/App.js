import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
class App extends React.Component{

state ={
  isLoading: true,
  movies:[],
};

getMovies= async()=>{
  const {
    data:{
      data:{movies}
    }
  } = await axios.get('https://yts.mx/api/v2/list_movies.json');
  // console.log(movies);

  this.setState({isLoading:false, movies:movies});
}

componentDidMount(){
  // setTimeout(function(){
  //   this.setState({isLoading:false});
  // }, 3000);
  // setTimeout(()=>{
  //   this.setState({isLoading: false});
  // },3000);
 this.getMovies();   
}

render(){

  //const isLoading =this.state.isLoading;
  const{isLoading, movies}=this.state;
  
  return(
 
    <div>
     {isLoading ? "loading..." : movies.map((movie)=>{
       console.log(movie);
       return(<Movie key={movie.id} title={movie.title} year={movie.year} rating={movie.rating} />
        );
     })}
    </div>
  );
}

}

export default App;
