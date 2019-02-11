import React, { Component } from 'react';
import './Cameras.css'

class Camera extends Component {
    render() {
        const {camera} = this.props;
        return (
            <tr className="Camera">
                <td>{this.props.index}</td>
                <td>{camera.name}</td>
                <td>{camera.type}</td>
                <td>{camera.address}</td>
            </tr>
        );
    }
}

export default Camera;
