import React, { useState } from "react";
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Appbar from 'muicss/lib/react/appbar';
function ImagePick({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };


    return (
        <div>
            
            <Row>
            
                {images.map((image) => (
                    <Col md='2' style={{marginLeft:'0'}}>
                    <img
                        key={image.id}
                        src={image.src.small}
                        alt={image.photographer}
                        onClick={() => handleImageClick(image.src.large)}
                    />
                     </Col>
                ))}
           
            </Row>
            <Appbar className='topAppBar'><h1>Meme Generator</h1></Appbar>;
            <div>
                {selectedImage && <img src={selectedImage} alt="Selected" />}
            </div>
        </div>
    );
}

export default ImagePick