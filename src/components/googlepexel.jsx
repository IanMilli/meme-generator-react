
import React, { useState } from "react";  
import axios from 'axios';  
import Panel from 'muicss/lib/react/panel';

 
function GooglePexel() {  
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
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={noOfPics} name="deliveryNumber" className="AutoFocus form-control" placeholder="No of Images"  
                            type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div class="container">  
                <div class="row">  
                    {result.map(search => (  
                        <div className="col-sm-4">  
                            <Panel style={{ 'margin-top': '10px' }}>  
                                <img variant="top" src={search.src.landscape} alt={search.photographer} />  
                               
                                    <h5 className="card-title">Card title</h5>  
                                    <a className="btn btn-primary">Know more</a>  
                               
                            </Panel>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
    )  
}  
  
export default GooglePexel 