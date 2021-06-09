import React from "react";
import Row from "./components/Row";
import Banner from './components/Banner'
import "./App.css";
import NavBar from './components/NavBar'
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
      {/* {
        essey chnket and semere
      } */}
    </div>
  );
}

export default App;
