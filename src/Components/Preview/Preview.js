import React from 'react';
import './Preview.css';
function Preview(props) {
        return (
        <div className="preview-section" id="preview" dangerouslySetInnerHTML={{__html:props.viewContent}}></div> 

        );
}


export default Preview;