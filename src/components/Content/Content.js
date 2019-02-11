import React, { Component } from 'react';
import './Content.css';
import Section from './Section';



class Content extends Component {
    render() {
        return (
            <div id='content-wrapper' className="Content">
                <div className="mui--appbar-height"/>
                <div className="mui-container-fluid">
                    <br/>
                    <Section/>
                </div>
            </div>
        );
    }
}

export default Content;
