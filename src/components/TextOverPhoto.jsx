import React, { useState } from 'react';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';


function TextOverPhoto(props) {
  const [topText, setText] = useState(props.topText || '');
  const [image, setImage] = useState(props.photo || null);

  // This function will handle the user input for the text overlay
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // This function will handle the user input for the image file
  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Textarea label="Top meme text" onChange={handleTextChange} style={{ width: '30%' }} />
        <Textarea label="Bottom meme text" onChange={handleTextChange} style={{ width: '30%' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
            <Button color="primary" >Generate meme</Button>
          </div>
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div style={{ position: 'relative' }}>
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
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {topText}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextOverPhoto;
