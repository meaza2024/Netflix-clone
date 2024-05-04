import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';


const RowList = () => {
  return (
    <div>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        
      />
      <Row
        title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title={"COMEDY MOVIES"} fetchUrl={requests.fetchComedyMovies}/>
      <Row title={"HORROR MOVIES"} fetchUrl={requests.fetchHorrorMovies}/>
      <Row title={"ROMANC MOVIES"} fetchUrl={requests.fetchRomanceMovies}/>
      <Row title={"DOCUMENTARIES"} fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default RowList;

