import React from "react";


const Photo = (props) => {

    return(

        <div >
            <img style={{maxHeight:'200px'}}src={props.url} alt="doggo photo"/>
        </div>
    )
}

export default Photo;