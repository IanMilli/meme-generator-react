/**elder child component to which all the components are the younger children of app.js and grandparent index.js */
import React, { useState } from "react";
/**required for api request */
import axios from 'axios';
/**required for css framework requests to muicss framework */
import Container from 'muicss/lib/react/container';
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Panel from 'muicss/lib/react/panel';
/**imports middle child into elder child component */
import ImagePick from "./ImagePick";
/**imports component css file */
import '../Component1/CSS/Component1.css';

function PhotoSearch() {
    //defining function to scroll down page
    const handleClickScroll = () => {
        const element = document.getElementById('sectionA');
        if (element) {
            //  Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    /**required const variables */
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState("");
    const [result, setResult] = useState([]);
    /**defining function to change search parameter */
    function handleChange(event) {
        const search = event.target.value;
        setSearch(search);
    }
    /**defining function to change number of pics searched for */
    function noOfPics(event) {
        const perPage = event.target.value;
        setPerPage(perPage);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //function calling for page scroll
        handleClickScroll();
        // Check if perPage is greater than 20
        if (parseInt(perPage) > 20) {
            alert("Please enter a value less than or equal to 20 for No of Images.");
            return;
        }
        //check if user has added a text input
        if (search === "") {
            alert("Please enter the some text")
            return;
        }
        //start api enquiry
        const url = "https://api.pexels.com/v1/search?query=" + search + "&per_page=" + perPage;
        const access_token = 'y8Z3JcRLu0Lwsh64Cnt8G58MLEXkH9uZXwhapvDSJeORtiiGXGIEWHZm';
        //use Get
        axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(data => {
            //console log response from api
            console.log('response =' + data);
            setResult(data.data.photos);
        })

    }
    return (

        <Form onSubmit={handleSubmit}>
            {/**form to house the displayed response from api */}
            <div className="card-header main-search">

                <h2 data-aos="fade-left" data-aos-duration="2500">Search for your perfect meme image using the Image Search or upload your own with the Image Uploader</h2>
                {/**panel to house title for image search area- uses aos library to animate text */}
                <Panel className='subtitlePanel mui--z5'>
                    <h1 data-aos="zoom-in" data-aos-duration="3000">Image Search</h1>
                </Panel>
                {/**use aos animation to make text appear from right - text to explain search to user */}
                <h2 data-aos="fade-right" data-aos-duration="2500">Enter a search choice and the number of Images you wish to peruse up to 20 in the boxes below</h2>
                <Row className="inputRow">
                    <Col md='3'>
                        {/**input box for entering search parameter - locked at 25 characters to limit abuse */}
                        <Input onChange={handleChange} className="AutoFocus form-control inputBox mui--z4" placeholder="Type something..." type="text" maxLength={25}>
                        </Input>
                    </Col>
                    {/**uses muicss sizing to define column size and placement */}
                    <Col md='3'>
                        {/**input box for entering search parameter - locked at 2 characters to limit abuse */}
                        <Input onChange={noOfPics} name="deliveryNumber" className="AutoFocus form-control inputBox mui--z4" placeholder="No of Images-maximum 20"
                            type="text" maxLength={2} />
                    </Col>
                    {/**div to house button to initiate api request */}
                    <div >
                        <Button variant="raised" data-aos="flip-right" data-aos-duration="1500" className="searchBut mui--z4">Search For Image</Button>
                    </div>
                </Row>
                {/**end of main card div */}
            </div>
            {/**container to contain response from api */}
            <Container fluid={true}>
                <Row>
                    <div className='"alignCards"' id='sectionA'>
                        {result.map(search => (
                            <Col >
                                {/* <img src={search.src.small} alt={search.photographer} /> not sure why but if no div here it breaks */}
                            </Col>
                        ))}
                    </div>
                    {/**text to instruct user to click on preferred image */}
                    <h1 >Click On Your Preferred Image And Scroll Down</h1>
                    <ImagePick images={result} />
                </Row>
            </Container>
        </Form>
    )
}
//exports PhotoSearch to App.js
export default PhotoSearch