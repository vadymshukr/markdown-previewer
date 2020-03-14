import React from 'react';
import './Preview.css';
const marked = require('marked');
function Preview(props) {
        return (
        <div>{props.viewContent}</div> 

        );
}


export default Preview;