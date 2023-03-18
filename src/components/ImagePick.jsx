import React, { useState ,useRef} from "react";


import * as htmlToImage from 'html-to-image';
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Panel from 'muicss/lib/react/panel';
import '../components/css/ImagePick.css';
import TextOverPhoto from './TextOverPhoto';

function ImagePick({ images }) {



    
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);

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
  

    return (
        <div>

            <Row>

                {images.map((image) => (
                    <Col md='2' className="smallImageColumn" >
                       
                        <img
                            className='smallImages'
                            key={image.id}
                            src={image.src.small}
                            alt={image.photographer}
                            onClick={() => handleImageClick(image.src.large)}
                        />
                    </Col>
                ))}

            </Row>
            <Panel className="mui--z5 panel">
            <Appbar className='topAppBar'><h1>Meme Generator</h1></Appbar>
            </Panel>
            <Panel className="mui--z5 panel3">
               
                <Col className="mui--align-middle">
                <div id="domEl" ref={domEl}>
                    {selectedImage && <img src={selectedImage} alt="Selected"  /> &&
                     <TextOverPhoto topText="Top Text Goes Here" photo={selectedImage} />}
                    </div>
                    <Button variant="raised" className="downloadBut mui--align-middle" onClick={downloadImage}>Download Meme</Button>
                   
                </Col>
            </Panel>
        </div>
    );
}

export default ImagePick