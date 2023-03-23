import React, { useState, } from "react";



import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Panel from 'muicss/lib/react/panel';
import '../Component1/CSS/ImagePick.css';
import TextOverPhoto from './TextOverPhoto';
import Input from 'muicss/lib/react/input';

function ImagePick({ images }) {
    // scroll to meme section when picture is clicked on
    const handleClickScroll = () => {
        const element = document.getElementById('section1');
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }




    // This function will handle the user input for the image file
    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };



    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        //calling function to scroll down page
        handleClickScroll();
        //calling function to set main pic for meme
        setSelectedImage(imageSrc);

    };



    return (
        <div>

            <Row>

                {images.map((image) => (
                    <Col md='2' className="smallImageColumn" >

                        <img data-aos="zoom-in" data-aos-duration="3000"
                            className='smallImages'
                            key={image.id}
                            src={image.src.small}
                            alt={image.photographer}
                            onClick={() => handleImageClick(image.src.large)}
                        />
                    </Col>
                ))}
                </Row>
                <Row>
                <Panel  className='subtitlePanel mui--z5'>
                    <h1 data-aos="zoom-in" data-aos-duration="3000">Image Uploader</h1>
                </Panel>
                
                <Input type="file" className='inputBoxUpload mui--z3 mui--align-middle" ' accept="image/*" onChange={handleImageChange} />
                            </Row>
            <Panel  data-aos="zoom-in" data-aos-duration="3000"className="mui--z5  subtitlePanel">
               <h1 data-aos="zoom-in" data-aos-duration="3000">Meme Generator</h1>
            </Panel>
            <Panel className="mui--z5 panel3" data-aos="zoom-in" data-aos-duration="3000" >

                <Col className="mui--align-middle">



                    <TextOverPhoto topText="Top Text Goes Here" photo={selectedImage} />




                </Col>

            </Panel>
        </div>
    );
}

export default ImagePick

