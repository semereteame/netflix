import React from "react";
import Row from "./Row";
import Banner from './Banner'
import "./App.css";
import NavBar from './NavBar'
import request from "./requst";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
