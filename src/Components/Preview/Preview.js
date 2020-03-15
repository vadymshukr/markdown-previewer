import React from 'react';
import './Preview.css';
const marked = require('marked');
function Preview(props) {
        return (
        <div id="preview" dangerouslySetInnerHTML={{__html:props.viewContent}}></div> 

        );
}


export default Preview;