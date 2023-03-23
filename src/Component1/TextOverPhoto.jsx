//component to allow text to go over the meme image and for text color to be adapted
import React, { useState, useRef } from 'react';
//imports from muicss library
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';
// import from npm library copy-image-clipboard required to allow the user to copy the image
import { copyImageToClipboard } from 'copy-image-clipboard';
//import from npm library html-to-image to allow user to convert the dom element into an image that can be copied or downloaded
import * as htmlToImage from 'html-to-image';
//component parent function
function TextOverPhoto({ photo }) {
  //required for appling top and bottom text
  const [topText, settopText] = useState(null);
  const [bottomText, setbottomText] = useState(null);
  //required to set color of text
  const [selectedColor, setSelectedColor] = useState('');
  //defines function to change color of text
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
  // used to define domEl
  const domEl = useRef(null);
  // defines function to download image
  const downloadImage = async () => {
    //converts dataurl from a dom element into a png image file - will convert whatever is in the element at that time
    const dataUrl = await htmlToImage.toPng(domEl.current);
    // download image
    //creates a a tag element
    const link = document.createElement('a');
    //gives a name to the generated image
    link.download = 'MIImeme.png';
    //gives a url to the image based on the link
    link.href = dataUrl;
    //honestly ive no idea but this is needed
    link.click();
  };

  //defines function to copy image which was created via research insomnia and a little hocus pocus but it works so yey
  const copyImage = async () => {
    // convert the domEl.current into an image using the htmltoImage library
    const dataUrl = await htmlToImage.toPng(domEl.current);
    //copy image 
    // create a tag element 
    const link = document.createElement('a')
    // link the a tag element to the href value  of dataURL
    link.href = dataUrl;
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
  //return html as function is run
  return (
    <div>
      {/**text to explain to user how to add text to their image and style its color */}
      <h2 style={{ marginBottom: '5vh', textAlign: 'Center' }}>Type in the Boxes Below To See your Text On The Image. Use The Drop Down Menu To Make Style Changes To The Text</h2>
      <h2>The text color defaults to black so please update to your chosen color to see the text on your Meme</h2>
      {/**centres the contents of the div */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/**input boxes to allow user to add text to the bottom and the top of the image */}
        <Input onChange={handleTopTextChange} className="AutoFocus form-control inputBoxMeme mui--z3" placeholder="Text For The Top Of The Meme" type="text" maxLength={30} />
        <Input onChange={handleBottomTextChange} className="AutoFocus form-control inputBoxMeme mui--z3" placeholder="Text For The Bottom Of The Meme" type="text" maxLength={30} />
        {/**dropdown selection to allow user to change colors of text */}
        {/**calls handleColorSelect function to change text color */}
        <Dropdown
          label="Text Color"
          onClick={function () { console.log('toggle clicked') }}
          onSelect={handleColorSelect}
          className='mui--z4 dropdownMain'
        >
          {/**added classes to style options almost to relevent colors - as dropdown menu uses a tag text set to white, but white background adjusted */}
          <DropdownItem className='dropDownColorWhite' value="White">White</DropdownItem>
          <DropdownItem className='dropDownColorBlack' value="Black">Black</DropdownItem>
          <DropdownItem className='dropDownColorRed' value="Red">Red</DropdownItem>
          <DropdownItem className='dropDownColorMagenta' value="Magenta">Magenta</DropdownItem>
        </Dropdown>
      </div>
      {/**domEl is the div that is copied or downloaded everything within will be grabbed */}
      <div id="domEl" ref={domEl}>
        {/**positions div that will hold the generated photo */}
        <div style={{ position: "relative" }}>
          {photo && (
            <img
              src={photo}
              alt="Selected"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                border: 'black solid 1vh',
                maxWidth: '100%',
                height: '60vh',
                marginBottom: '5vh',
                marginTop: '3vh',
              }}
              id="photoImg"
            />
          )}
          {/**allows top and bottom text to be added */}
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
      <div data-aos="fade-up" data-aos-duration="3000" style={{ display: 'flex', justifyContent: 'center' }}>
        {/**button to call download function */}
        <Button variant="raised" className="downloadBut mui--align-middle mui--z4" onClick={downloadImage}>Download Meme</Button>
        {/**button to call copy function */}
        <Button variant="raised" className="downloadBut mui--align-middle mui--z4" onClick={copyImage}>Copy Meme</Button>
      </div>
    </div>
  );
}
//eslint-disable-next-line
{/**exports component TextOverPhoto */}
export default TextOverPhoto;
