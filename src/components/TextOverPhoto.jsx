
import React, { useState } from 'react';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';




function TextOverPhoto(props) {
  const [topText, settopText] = useState(props.topText || "");
  const [bottomText, setbottomText] = useState(props.bottomText || "");

  const [image, setImage] = useState(props.photo || null);

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
    setImage(URL.createObjectURL(event.target.files[0]));
  };

const copyMeme = (event) => {
  console.log ("copyMeme")
  
}

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Textarea label="Top meme text" onChange={handleTopTextChange} style={{ width: '30%' }} />
        <Textarea label="Bottom meme text" onChange={handleBottomTextChange} style={{ width: '30%' }} />
      </div>
      
      <div>

        
        <input type="file" accept="image/*" onChange={handleImageChange}  />
      </div>
      <div className="meme" style={{ position: "relative" }}>
        {image && (
          <img
            src={image}
            alt="Selected"
            style={{

              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%',

              maxWidth: '100%', height: 'auto'

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
  );
}

export default TextOverPhoto;
