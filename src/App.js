import React from 'react';
import PropTypes from 'prop-types';

const movies = 
[
  {
    id:1,
    name:"분노의 질주 홉스&쇼",
    image:"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82082/82082_185.jpg",
    rating:5
  },
  {
    id:2,
    name:"변신",
    image:"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82087/82087_185.jpg",
    rating:5

  },
  {
    id:3,
    name:"엑시트",
    image:"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82012/82012_185.jpg",
    rating:5

  },
  {
    id:4,
    name:"광대들",
    image:"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82085/82085_185.jpg",
    rating:5

  },
  {
    id:5,
    name:"봉오동 전투",
    image:"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82013/82013_185.jpg",
    rating:5

  }
]

function Movie({name, image, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating} </h4>
    <img src={image} alt={name}/>
  </div>
}

Movie.propTypes={
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {movies.map(movie=>(<Movie key={movie.id} name={movie.name} image={movie.image} rating={movie.rating}/>))}
    </div>
  );
}

export default App;
