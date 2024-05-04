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
    </div>
  );
}

export default RowList;

