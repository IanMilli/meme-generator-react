import React, { useState } from "react";
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Appbar from 'muicss/lib/react/appbar';
import Panel from 'muicss/lib/react/panel';
import '../components/css/ImagePick.css';
function ImagePick({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
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
            <Appbar className='topAppBar'><h1>Meme Generator</h1></Appbar>
            <Panel className="mui--z5 panel">
               
                <Col className="mui--align-middle">
                    {selectedImage && <img src={selectedImage} alt="Selected" className="bigPic mui--align-middle mui--z3" />}
                </Col>
            </Panel>
        </div>
    );
}

export default ImagePick