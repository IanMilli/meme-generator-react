import React, { useState, } from "react";



import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Panel from 'muicss/lib/react/panel';
import '../components/css/ImagePick.css';
import TextOverPhoto from './TextOverPhoto';

function ImagePick({ images }) {
    // scroll to meme section when picture is clicked on
    const handleClickScroll = () => {
        const element = document.getElementById('section1');
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }




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
                    <Appbar className='topAppBar' id='section1'><h1>Meme Generator</h1></Appbar >
                </Panel>
                <Panel className="mui--z5 panel3">

                    <Col className="mui--align-middle">



                        <TextOverPhoto topText="Top Text Goes Here" photo={selectedImage} />



                    </Col>
                </Panel>
            </div>
        );
    }

    export default ImagePick