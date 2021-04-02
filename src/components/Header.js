import React, { Component } from "react";

class Header extends React.Component {
  //class는 내부는 반드시 render 함수로 되어있어야 한다.
  //class 내부는 멤버 함수는 function 키워드를 사용해서는 안된다.

  render() {
    //return의 값인 jsx는 태그가 하나 일때는 ( )없이 작성하고, 자식 태그를 보함할때는 ( )을 사용 한다.

    return (
      //최상위 태그는 모든 태그를 포함하는 하나의 태그만 있어야 한다.
      <header>
        <h1>react header area...</h1>
      </header>
    );
  }
}

export default Header;
