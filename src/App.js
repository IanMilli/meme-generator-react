
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';

function App() {
  return (
    <div >
   

 <Appbar className='topAppBar'><h1>Meme Generator</h1></Appbar>;

<div style={{height:'30vw'}}>

</div>
<Appbar className='bottomAppBar'><a style={{color:'white'}} href="https://github.com/IanMilli/meme-generator-react">© 2023 Copyright: Manolis Giavasis, Ian Logendra & Ian
        Millichamp</a></Appbar>
</div>
  );
}

export default App;
