import { YMaps, Map } from 'react-yandex-maps';
import React, {Component} from 'react';

export default class CityMap extends Component {
    render() {
        return(
            <YMaps>
                <div>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </YMaps>
        )
    }
}