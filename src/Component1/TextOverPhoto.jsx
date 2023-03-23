
import React, { useState, useRef } from 'react';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import * as htmlToImage from 'html-to-image';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
import { copyImageToClipboard } from 'copy-image-clipboard';






function TextOverPhoto({ photo }) {





  
  const [topText, settopText] = useState(null);
  const [bottomText, setbottomText] = useState(null);

 

  const [selectedColor, setSelectedColor] = useState('');

 

  
  function handleColorSelect(val) {
    setSelectedColor(val);
  }

  

  // This function will handle the user input for the text overlay
  const handleTopTextChange = (event) => {
    settopText(event.target.value);
  };

  // This function will handle the user input for the text overlay
  const handleBottomTextChange = (event) => {
    setbottomText(event.target.value);
  };

  

 

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();

   

  };
  const copyImage = async () => {
    // convert the domEl.current into an image using the htmltoImage library
    const dataUrl = await htmlToImage.toPng(domEl.current);
 //copy image 
 // create a tag element 
 const link=document.createElement('a')
 // link the a tag element to the href value  of dataURL
 link.href =dataUrl;
 //use copy Image to clipboard library imputing value of link
 copyImageToClipboard(link)
 .then(() => {
  // if copied to clipboard alert 'image copied'
  alert('Image Copied')
 })
 //if doesnt work console log why
 .catch((e) => {
  console.log(link)
  console.log('Error', e.message)
 })
 
  }

  return (
    <div>
      <h2 style={{marginBottom:'5vh', textAlign:'Center'}}>Type in the Boxes Below To See your Text On The Image Or Use The Drop Down Menu To Make Style Changes To The Text</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        
        
        <Textarea label="Top meme text" maxLength={30} onChange={handleTopTextChange} style={{ width: '50%', marginRight: '5vh' }} />
        <Textarea label="Bottom meme text" maxLength={30} onChange={handleBottomTextChange} style={{ width: '50%', marginRight: '5vh' }} />
        {/* </div>
      <div> */}
        <Dropdown
       style={{backgroundColor:'#DA7422 ', color:'#FFFBDB'}}
          variant = 'raised'
          label="Text Color"
          onClick={function () { console.log('toggle clicked') }}
          onSelect={handleColorSelect}
        >
          <DropdownItem value="White">White</DropdownItem>
          <DropdownItem value="Black">Black</DropdownItem>
          <DropdownItem value="Red">Red</DropdownItem>
          <DropdownItem value="Magenta">Magenta</DropdownItem>
        </Dropdown>
      </div>
      <div>



      </div>
      <div id="domEl" ref={domEl}>
        <div style={{ position: "relative" }}>
          {photo && (
            <img
              src={photo}
              alt="Selected"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                border: 'black solid 1vh',
                maxWidth: '100%',
                height: 'auto'
               
              }}
              id="photoImg"
            />
          )}
          {topText && (
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: selectedColor,
                fontWeight: "bold",
                fontSize: "2rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {topText}
            </div>
          )}

          {bottomText && (
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: selectedColor,
                fontWeight: "bold",
                fontSize: "2rem",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {bottomText}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="raised" className="downloadBut mui--align-middle" onClick={downloadImage}>Download Meme</Button>
        <Button variant="raised" className="downloadBut mui--align-middle" onClick={copyImage}>Copy Meme</Button>
        
        
      </div>
     
    </div>
  

  
  );
}

export default TextOverPhoto;
