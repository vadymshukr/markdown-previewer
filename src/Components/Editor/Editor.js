import React from 'react';
import './Editor.css';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.dataUpdate(e.target.value);
    }
    render(){
        return (
            <div>
                <textarea name="" id="" cols="30" rows="10" onChange={this.handleChange}></textarea>
            </div> 
         );
    }
        
}


export default Editor;