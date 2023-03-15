

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import PhotoContainer from "./components/PhotoContainer.jsx";
import Photo from "./components/Photo";
import '../src/App.css';

/**changed app.js from a functional component to make a class component */
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/images/search?limit=20")
      .then(response => {
        console.log('response', response);
        if (!response.ok) {
          throw Error("error fetching dog pics");
        }
        return response.json()
          .then(allData => {
            this.setState({ photos: allData });
          })
          /**this is added so if something in the method goes wrong it will throw an error explaining the error */
          .catch(err => {
            throw Error(err.message);
          })
      })

  }
  render() {
    return (
      <div>


        <Appbar className='topAppBar'><h1>Meme Generator</h1></Appbar>;
        <div style={{ height: '30vw' }}>

          <div className="photoContainer">
            <h2>some pics be here </h2>
            <PhotoContainer photos={this.state.photos}/>
        </div>
        </div>
          <Appbar className='bottomAppBar'><a style={{ color: 'white' }} href="https://github.com/IanMilli/meme-generator-react">© 2023 Copyright: Manolis Giavasis, Ian Logendra & Ian
            Millichamp</a></Appbar>
        </div>
        );
}
}
        export default App;
