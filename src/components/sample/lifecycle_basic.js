import React from "react";
class App extends React.Component{

constructor(props){
  //constructor에서 받아온 props 전달값은 super의 파라미터에 지정한다.
  super(props);
  console.log("2. render call");
}


componentDidMount(){
  console.log('componentDidMount call');
  //componentDidMount 화면이 렌더링된 이후 실행
}

state={

  count: 0
}

add=()=>{
  this.setState({count:this.state.count+1});
}

componentDidUpdate(){
  console.log('4 componentDidUpdate call');
  //화면의 상태변화가 이뤄진 이후 실행
}

render(){

  console.log("1. render call");
  return(
 
    <div>
      <h1>This is Life Cycle Bisics</h1>
      <button onClick={this.add}> add</button>
    </div>
  );
}

}

export default App;
