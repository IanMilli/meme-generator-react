import React, { useState } from 'react';

function TextOverPhoto(props) {
  const [text, setText] = useState(props.text ||'');
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
      <div>
        <input type="text" onChange={handleTextChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div style={{ position: 'relative' }}>
        {image && (
          <img
            src={image}
            alt="Selected"
            style={{      display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            
             maxWidth: '100%', height: 'auto' }}
          />
        )}
        {text && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextOverPhoto;
