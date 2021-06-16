import React, { Component } from 'react';
import './Color.css';

class Color extends Component {
    render(){
        return (
            <div 
            onClick={() =>{
                this.props.handleClick();
            }}
             className="Color" style={{backgroundColor: this.props.color }}>
            </div>
        )
    }
}

export default Color;

