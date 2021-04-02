import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
// import React from 'react';
// class Greeting extends Component{
//render 함수의 내부에서 return 값은 반드시 하나의 태그로 감싸져야 한다.
//   render(){
//     return(
//       <div>
//         <p> hello angain react!!</p>
//       </div>
//     );
//   }
// }
//default =리턴과 동일한 뜻 밖았으로 함수 내보내는
//함수와 class 형식으로 작성 가능

// function greetion(){
//   //render(){
//     return{
//       <div>
//       <p>hello angain react!!</p>
//       </div>
//     }
//   }
// }

//function header(){
// class Header extends React.Component {
//   //class는 내부는 반드시 render 함수로 되어있어야 한다.
//   //class 내부는 멤버 함수는 function 키워드를 사용해서는 안된다.

//   render() {
//     //return의 값인 jsx는 태그가 하나 일때는 ( )없이 작성하고, 자식 태그를 보함할때는 ( )을 사용 한다.

//     return (
//       //최상위 태그는 모든 태그를 포함하는 하나의 태그만 있어야 한다.
//       <header>
//         <h1>react header area...</h1>
//       </header>
//     );
//   }
// }

// class Section extends React.Component {
//   render() {
//     return (
//       <section>
//         <em>아 머리 하러 가야하는데 허쉬컷이랑 샤기컷이랑 뭐가 다른거 </em>{" "}
//       </section>
//     );
//   }
// }

function App() {
  return (
    <div className='App'>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
