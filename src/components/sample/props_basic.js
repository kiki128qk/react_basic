import React from "react";
import "./App.css";
import PropTypes from "prop-types";

function Movei({ title, ranking, desc, image }) {
  //함수형 컴포먼트
  console.log(typeof ranking);

  return (
    <div>
      <h3>My Favorit Movie is {title}</h3>
      <p>ranking:{ranking}</p>
      <p>Descroitopn:{desc}</p>
      <img scr={image} alt={title}></img>
      <p>Descroitopn:{image}</p>
    </div>
  );
}

const myMovies = [
  {
    id: 1,
    title: "shindler",
    ranking: 4,
    desc: "해리포터",
    image:
      "https://lh3.googleusercontent.com/proxy/amg6Dtpd5HAJw5CeoCGTb026XRbs5LJkrr4jxjtNuVLuJTgig-Cp5V4aRbR86hE41he-g1uZ24T-L2eajrt93VEDuca-8NuAcezLb1g1Mp5nLtEjc3UIZIoklNNcgxZC_Bw",
  },
  {
    id: 2,
    title: "shindler",
    ranking: 4,
    desc: "인사이드 뷰티",
    image:
      "https://lh3.googleusercontent.com/proxy/amg6Dtpd5HAJw5CeoCGTb026XRbs5LJkrr4jxjtNuVLuJTgig-Cp5V4aRbR86hE41he-g1uZ24T-L2eajrt93VEDuca-8NuAcezLb1g1Mp5nLtEjc3UIZIoklNNcgxZC_Bw",
  },
  {
    id: 3,
    title: "shindler",
    ranking: 4,
    desc: "아이언맨",
    image:
      "https://lh3.googleusercontent.com/proxy/amg6Dtpd5HAJw5CeoCGTb026XRbs5LJkrr4jxjtNuVLuJTgig-Cp5V4aRbR86hE41he-g1uZ24T-L2eajrt93VEDuca-8NuAcezLb1g1Mp5nLtEjc3UIZIoklNNcgxZC_Bw",
  },
  {
    id: 4,
    title: "shindler",
    ranking: 4,
    desc: "다만세",
    image:
      "https://lh3.googleusercontent.com/proxy/amg6Dtpd5HAJw5CeoCGTb026XRbs5LJkrr4jxjtNuVLuJTgig-Cp5V4aRbR86hE41he-g1uZ24T-L2eajrt93VEDuca-8NuAcezLb1g1Mp5nLtEjc3UIZIoklNNcgxZC_Bw",
  },
];

//const arr = ["a", "b", "c", "d"];
// arr.map(function (elm) {
//   console.log(elm);
//   return 0;
// });

// arr.map((elm) => {
//   console.log(elm);
// });

function App() {
  return (
    <div className='App'>
      <h2>My Movie</h2>
      {myMovies.map((movie) => (
        <Movei
          title={myMovies.title}
          ranking={myMovies.ranking}
          desc={myMovies.desc}
          image={myMovies.image}
          key={movie.id}
        />
      ))}
    </div>
  );
}

Movei.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
};

export default App;
