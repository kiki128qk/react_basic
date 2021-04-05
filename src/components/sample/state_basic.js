import React from "react";
class App extends React.Component{

//요소 중에서 고정되어 있지만 향후 변경해야 할 요소의 경우 먼저 state로 상태지정한다.
//이후 특정한 조건이 진행되면 상태가 변경되는데 이때 setState로 변경한다.

// 초기값
state = {
  count :0,
}
// plus(){
//   //console.log('plus');
//   this.state.count=1;
// }
//일반 함수의 경우 클래스 범위의 this 데이터가 바인딩 도지 않는다. 따라서부모 클래스의 this를 함수 안에서 사용해야 하는 경우 화살표 함수를 사용해야 한다.

plus =( )=>{
  //this.tsate.count=1;
  this.setState({count:this.state.count + 1});

}

// minus(){
//   console.log('minus');
// }
minus =( )=>{
  //this.tsate.count=1;
  this.setState({count:this.state.count - 1});

}


render(){
  return(
    <div>
      <h1> the number is : {this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  );
}

}

export default App;
