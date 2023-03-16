
import React, { useState } from "react";
import axios from 'axios';
import Container from 'muicss/lib/react/container';
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

function PhotoSearch() {
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState("");
    const [result, setResult] = useState([]);

    function handleChange(event) {
        const search = event.target.value;
        setSearch(search);
    }
    function noOfPics(event) {
        const perPage = event.target.value;
        setPerPage(perPage);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = "https://api.pexels.com/v1/search?query=" + search + "&per_page=" + perPage;
        const access_token = 'y8Z3JcRLu0Lwsh64Cnt8G58MLEXkH9uZXwhapvDSJeORtiiGXGIEWHZm';
        axios.get(url, {
            headers: {
                'Authorization': `${access_token}`
            }
        }).then(data => {
            console.log(data);
            setResult(data.data.photos);
        })

    }
    return (
        <Form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <h2>Search Here For An Image To Use In The Meme Generator</h2>
                <Row>
                    <Col md='3'>
                        <Input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
                    </Col>
                    <Col md='3'>
                        <Input onChange={noOfPics} name="deliveryNumber" className="AutoFocus form-control" placeholder="No of Images"
                            type="text" />
                    </Col>
                    <Row>
                    <div >
                        <Button variant="raised">Search For Image</Button>
                    </div>
                    </Row>
                </Row>
            </div>
            <Container fluid={true}>
                <Row>
                    <div className='"alignCards"'>
                        {result.map(search => (
                            <Col md='2' style={{marginLeft:'0'}}>
                                <img src={search.src.small} alt={search.photographer} onClick={() => this.openImage(index) /* The onclick here determines current image */}/>
                                <h5 >{search.photographer}</h5>
                               
                            </Col>
                        ))}
                    </div>
                </Row>
            </Container>
        </Form>


    )
}

export default PhotoSearch