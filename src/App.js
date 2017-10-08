import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/card';

const image1 = 'https://images.6play.fr/v1/images/864696/raw?width=800&height=450&fit=scale_crop&quality=60&format=jpeg&interlace=1&hash=f773064cff5fb075c23e9e68347cf0bf948619f4';
const image2 = 'https://images.6play.fr/v1/images/909632/raw?width=800&height=450&fit=scale_crop&quality=60&format=jpeg&interlace=1&hash=8374614973020a55254e96a09708d1c790669b50';
const image3 = 'https://images.6play.fr/v1/images/946898/raw?width=800&height=450&fit=scale_crop&quality=60&format=jpeg&interlace=1&hash=7d9631e8d5c62658050e0e211c8560521acb2101';
const image4 = 'https://images.6play.fr/v1/images/914310/raw?width=800&height=450&fit=scale_crop&quality=60&format=jpeg&interlace=1&hash=58bf66f5d557887e68e2b170de9f4fdfcdda1acb';
class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="grid">
          <div className="App">
            <div className="block">
              <Card src={image1} isLarge />
            </div>
            <div className="block">
              <Card src={image2} isLarge />
            </div>
            <div className="block">
              <Card src={image3} isLarge />
            </div>
            <div className="block">
              <Card src={image4} />
              <Card src={image2} />
              <Card src={image1} />
              <Card src={image3} />
            </div>
          </div>
          <div className="page">
            <Card src={image3} page />
            <Card src={image2} page />
            <Card src={image1} page />
            <Card src={image4} page />
          </div>
          <div className="page">
            <Card src={image3} page />
            <Card src={image2} page />
            <Card src={image1} page />
            <Card src={image4} page />
          </div>
          <div className="page">
            <Card src={image3} page />
            <Card src={image2} page />
            <Card src={image1} page />
            <Card src={image4} page />
          </div>
          <div className="page">
            <Card src={image3} page />
            <Card src={image2} page />
            <Card src={image1} page />
            <Card src={image4} page />
          </div>
          <div className="page">
            <Card src={image3} page />
            <Card src={image2} page />
            <Card src={image1} page />
            <Card src={image4} page />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
