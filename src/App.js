import React from "react";
// import axios from "axios";
// import Movie from "./components/Movie";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import  "./App.css";
import {HashRouter, Route} from 'react-router-dom';

function App(){
  return (
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie_detail" component={Detail}></Route>
  </HashRouter>
  );
 
}
export default App;
