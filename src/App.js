
import React, { Component,useRef  } from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import '../src/App.css';
import PhotoSearch from "./Component1/PhotoSearch.jsx";
import Panel from 'muicss/lib/react/panel';
import TextOverPhoto from './Component1/TextOverPhoto';


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
          <Appbar className='topAppBar mui--z5 'data-aos="flip-right" data-aos-duration="1500"><h1 data-aos="zoom-in" data-aos-duration="3000" >MII Meme Generator</h1></Appbar>
        </Panel>
        <div>
          <div>
            <Panel>
              <PhotoSearch></PhotoSearch>
            </Panel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
          

          
        </div>
       
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
export default App;

