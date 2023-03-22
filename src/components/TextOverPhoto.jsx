import React, { useState, useRef } from "react";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import * as htmlToImage from "html-to-image";
import { copyImageToClipboard } from "copy-image-clipboard";

function TextOverPhoto({ photo }) {
  const [topText, settopText] = useState("Top Text Here");
  const [bottomText, setbottomText] = useState("Bottom Text Here");

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
  // const handleImageChange = (event) => {
  //  setImage(URL.createObjectURL(event.target.files[0]));
  // };

  const domEl = useRef(null);

  //function to copy meme to clipboard
  const copyImage = async () => {

  const memeImg  = await htmlToImage.toPng(domEl.current);

    // Pass the image src attribute here
    copyImageToClipboard(
      memeImg,
    )
      .then(() => {
        console.log('Image Copied')
      })
      .catch((e) => {
        console.log('Error: ', e.message)
      })
  };

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Textarea
          label="Top meme text"
          maxLength={30}
          onChange={handleTopTextChange}
          style={{ width: "50%", marginRight: "5vh" }}
        />
        <Textarea
          label="Bottom meme text"
          maxLength={30}
          onChange={handleBottomTextChange}
          style={{ width: "50%", marginRight: "5vh" }}
        />
      </div>

      <div></div>
      <div id="domEl" ref={domEl}>
        <div style={{ position: "relative" }}>
          {photo && (
            <img
              src={photo}
              alt="Selected"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
                border: "black solid 1vh",
                maxWidth: "100%",
                height: "auto",
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="raised"
          className="downloadBut mui--align-middle"
          onClick={downloadImage}
        >
          Download Meme
        </Button>
        <p> </p>
        <Button
          variant="raised"
          className="copyBut mui--align-middle"
          onClick={copyImage}
        >
          Copy Meme To Clipboard
        </Button>
      </div>
    </div>
  );
}

export default TextOverPhoto;
