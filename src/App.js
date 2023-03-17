
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import '../src/App.css';
import PhotoSearch from "./components/PhotoSearch.jsx";
import Panel from 'muicss/lib/react/panel';
import TextOverPhoto from './components/TextOverPhoto';

import ImagePick from './components/ImagePick';
import Picture from './components/Picture';

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
        <Panel className="mui--z5 panel">
        <Appbar className='topAppBar'><h1>Image Search</h1></Appbar>
        </Panel>
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
          {/* Using this to test TextOverPhoto */}
          <div>
          {/* <TextOverPhoto text="Hello World!" photo="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" /> */}
          <Picture></Picture>
          </div>
        </div>
        <Panel className="mui--z5 panel4">
        <Appbar className='bottomAppBar'><a style={{ color: '#DA7422' }} href="https://github.com/IanMilli/meme-generator-react">© 2023 Copyright: Manolis Giavasis, Ian Logendra & Ian
          Millichamp</a></Appbar>
          </Panel>
      </div>
    );
  }
}
export default App;

