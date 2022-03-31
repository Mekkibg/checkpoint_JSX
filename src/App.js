import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import image from './nature4k.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth: '100vw'}}>

        <h1 className='title'>PLANET</h1>

        <br/>

        <img src="./city.jpg" alt="mycity" />

        <br/>

        <img src={image} alt="nature"/>

      </div>
      <ReactPlayer url='https://www.youtube.com/watch?v=SMKPKGW083c&t=46s' />
    </div>
  );
}

export default App;
