import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import './Cameras.css'
import Camera from './Camera'

class CameraList extends Component {
    render() {

        const cameraElements = this.props.cameras.map((camera, idx) =>
            <Camera key={camera.id} index={idx + 1} camera={camera}/>
        );

        return (
            <Container className="camera-list-container mui--z1">
                <table className="mui-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cameraElements}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default CameraList;
