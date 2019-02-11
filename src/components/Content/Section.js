import React, { Component } from 'react';
import CameraList from "./Cameras/CameraList";
import CityMap from './Map';
import {cameras} from '../../fixtures';


class Section extends Component {

    state = {
        currentSection: 'map'
    };

    render() {
        var currentSectionElem;
        switch (this.state.currentSection) {
            case 'cameras':
                currentSectionElem = <CameraList cameras={cameras}/>;
                break;
            case 'map':
                currentSectionElem = <CityMap/>;
                break;
            default:
                currentSectionElem = <CameraList cameras={cameras}/>;
        }
        return (
            currentSectionElem
        );
    }
}

export default Section;
