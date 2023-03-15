import React from "react";

const Photo = (props) => {

    return(

        <div>
            <img src={props.url} alt="doggo photo"/>
        </div>
    )
}

export default Photo;