import React, { Component } from 'react';
import './QuoteBox.css'

class QuoteBox extends Component {
    render() {

        //Set the background color of the HTML element to the random color that is passed in as a prop
        const html = document.documentElement;
        html.style.backgroundColor = this.props.color

        return (
            <div style= {{ backgroundColor: 'white' }} className='QuoteBox'>
                <h1 className='QuoteBox-quote fadeIn' style={{ color:this.props.color }}>{this.props.quote}</h1>
                <h4 className='QuoteBox-author fadeIn' style={{ color:this.props.color }}>
                -{this.props.author !== '' ? this.props.author : 'Unkown'}-
                </h4>
                <button className='QuoteBox-button' style={{ color:this.props.color }} onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;