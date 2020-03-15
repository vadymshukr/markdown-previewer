import React from 'react';
import './Editor.css';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleChange(e){
        this.props.dataUpdate(e.target.value);
    }

    handleReset(){
        this.props.dataReset();
        
    }


    render(){
        return (
            <div>
                <form>
                    <textarea name="" id="editor" cols="30" rows="10" onChange={this.handleChange} >{this.props.placeholder}</textarea>
                    <button type="reset" onClick={this.handleReset}>Reset</button>
                </form>
                
            </div> 
         );
    }
        
}


export default Editor;