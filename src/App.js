import React from "react";
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Banner />
      
      
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row title="Trending now"fetchUrl={requests.fetchTrending} />
      <Row title="Top rated"fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie"fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries"fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
