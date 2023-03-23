import React, { useState, } from "react";
//required imports from muicss library
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Panel from 'muicss/lib/react/panel';
import Input from 'muicss/lib/react/input';
//imports css file for components
import '../Component1/CSS/Component1.css';
//imports the baby child of TextOver Photo into imagePick that goes into photoSearch that goes into app.js that goes into index.js (isnt this a campfire song?)
import TextOverPhoto from './TextOverPhoto';
//parent function of component
function ImagePick({ images }) {
    // defining function to scroll to meme section when picture is clicked on
    const handleClickScroll = () => {
        const element = document.getElementById('section1');
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // defining function tio handle the user input for the image file
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
                {/**maping the api response to generate the images it comes back with */}
                {images.map((image) => (
                    <Col md='2' className="smallImageColumn" >
{/**uses aos library to make images fade in and uses class small images to define css styling such as border */}
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
                {/**new row to house image uploader */}
                <Row>
                <Panel  className='subtitlePanel mui--z5'>
                    {/**title of image uploader area with funky animation */}
                    <h1 data-aos="zoom-in" data-aos-duration="3000">Image Uploader</h1>
                </Panel>
                {/**input section to allow user to upload image from own area */}
                <Input type="file" className='inputBoxUpload mui--z3 mui--align-middle" ' accept="image/*" onChange={handleImageChange} />
                            </Row>
                            {/**new panel  that zooms in 2 seconds where as title takes 3 once page scrolls down*/}
            <Panel  data-aos="zoom-in" data-aos-duration="2000"className="mui--z5  subtitlePanel">
               <h1 data-aos="zoom-in" data-aos-duration="3000">Meme Generator</h1>
            </Panel>
            {/**panel to house input from TextOverPhoto - passing the selected Image into the function via the Photo */}
            <Panel className="mui--z5 panel3" data-aos="zoom-in" data-aos-duration="3000" >
                <Col className="mui--align-middle">
                    <TextOverPhoto topText="Top Text Goes Here" photo={selectedImage} />
                </Col>
            </Panel>
        </div>
    );
}
//eslint-disable-next-line
{/**exports function image pick */}
export default ImagePick

