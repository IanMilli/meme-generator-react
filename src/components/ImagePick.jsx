import React, { useState } from "react";

function ImagePick({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };


    return (
        <div>
            <div>
                {selectedImage && <img src={selectedImage} alt="Selected" />}
            </div>
            <div>
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src.small}
                        alt={image.photographer}
                        onClick={() => handleImageClick(image.src.large)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImagePick