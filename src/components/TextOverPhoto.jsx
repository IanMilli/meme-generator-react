
import React, { useState, useRef } from 'react';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import * as htmlToImage from 'html-to-image';
import TextHandling from "./TextHandling";
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';




function TextOverPhoto({ photo }) {
  const [topText, settopText] = useState(null);
  const [bottomText, setbottomText] = useState(null);

  // const [image, setImage] = useState(props.photo || null);

  // This function will handle the user input for the text overlay
  const handleTopTextChange = (event) => {
    settopText(event.target.value);
  };

  // This function will handle the user input for the text overlay
  const handleBottomTextChange = (event) => {
    setbottomText(event.target.value);
  };

  // This function will handle the user input for the image file
  const handleImageChange = (event) => {
    //  setImage(URL.createObjectURL(event.target.files[0]));
  };

  const copyMeme = (event) => {
    console.log("copyMeme")
  }

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Textarea label="Top meme text" maxLength={30} onChange={handleTopTextChange} style={{ width: '50%', marginRight: '5vh' }} />
        <Textarea label="Bottom meme text" maxLength={30} onChange={handleBottomTextChange} style={{ width: '50%', marginRight: '5vh' }} />
      {/* </div>
      <div> */}
      <Dropdown
          color="primary"
          label="Text Color"
          onClick={function() {console.log('toggle clicked')}}
          onSelect={function(val) {console.log(val);}}
        >
          <DropdownItem value="Black">Black</DropdownItem>
          <DropdownItem value="White">White</DropdownItem>
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
            />
          )}
          {topText && (
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
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
                color: "white",
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
        <input type="file" accept="image/*" onChange={handleImageChange}  style={{height:'2vw', marginLeft: '4vh'}}/>
      </div>
    </div>
  );
}

export default TextOverPhoto;
