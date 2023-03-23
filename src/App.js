
import React, { Component, } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import '../src/App.css';
import PhotoSearch from "./Component1/PhotoSearch.jsx";
import Panel from 'muicss/lib/react/panel';

/**changed app.js from a functional component to make a class component */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**allows adding of top and bottom text to meme */
      topText: '',
      bottomText: ''
    };
    this.handleTopTextChange = this.handleTopTextChange.bind(this);
    this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
  }
  /**sets state of top text and applies the input value allowing a user to change text value*/
  handleTopTextChange(event) {
    this.setState({ topText: event.target.value });
  }
  /**sets state of bottom text and applies the input value allowing a user to change text value*/
  handleBottomTextChange(event) {
    this.setState({ bottomText: event.target.value });
  }
  /**renders the app */
  render() {
    return (
      <div>
        {/*panel to contain header - uses animation from aos library to fliup the header logo */}
        <Panel className="mui--z5 panel">
          <Appbar className='topAppBar mui--z5 ' data-aos="flip-right" data-aos-duration="1500"><h1 data-aos="zoom-in" data-aos-duration="3000" >MII Meme Generator</h1></Appbar>
        </Panel>
        <div>
          <div>
            {/*panel to contain response from PhotoSearch jsx component */}
            <Panel>
              <PhotoSearch></PhotoSearch>
            </Panel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
        </div>
        {/**panel to contain footer of application and link text to application main readme */}
        <Panel className="mui--z5 panel4">
          <div className='footer'>
            <a style={{ color: '#DA7422' }} href="https://github.com/IanMilli/meme-generator-react">© 2023 Copyright: Manolis Giavasis, Ian Logendra & Ian
              Millichamp</a>
          </div>
        </Panel>
      </div>
    );
  }
}
/**exports App to index.js */
export default App;

