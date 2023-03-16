
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import '../src/App.css';
import GalleryBar from './components/GalleryBar.jsx';
import PhotoSearch from "./components/PhotoSearch.jsx";
import Panel from 'muicss/lib/react/panel';

import ImagePick from './components/ImagePick';


/**changed app.js from a functional component to make a class component */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: '',
      bottomText: ''
    };

    this.handleTopTextChange = this.handleTopTextChange.bind(this);
    this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
  }

  handleTopTextChange(event) {
    this.setState({ topText: event.target.value });
  }

  handleBottomTextChange(event) {
    this.setState({ bottomText: event.target.value });
  }

  render() {
    return (
      <div>
        <Appbar className='topAppBar'><h1>Image Search</h1></Appbar>
        <div>
          <div>
            <Panel>
              <PhotoSearch></PhotoSearch>
            </Panel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Textarea  label="Top meme text" value={this.state.topText} onChange={this.handleTopTextChange} style={{ width: '30%' }} />
            <Textarea  label="Bottom meme text" value={this.state.bottomText} onChange={this.handleBottomTextChange} style={{ width: '30%' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" >Generate meme</Button>
          </div>
          {/* This section (not sure if section tags are needed) is where the 12 images (thumbnails) will display across the top below the navbar */}
          <section>

          </section>
        </div>
        <Appbar className='bottomAppBar'><a style={{ color: 'white' }} href="https://github.com/IanMilli/meme-generator-react">© 2023 Copyright: Manolis Giavasis, Ian Logendra & Ian
          Millichamp</a></Appbar>
      </div>
    );
  }
}
export default App;

