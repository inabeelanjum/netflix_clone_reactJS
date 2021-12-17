import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED " fetchURL={requests.fetchTopRated} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="DOCUMENTRY MOVIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
