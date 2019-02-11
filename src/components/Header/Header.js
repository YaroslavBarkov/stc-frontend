import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="mui-appbar mui--appbar-line-height">
                    <div className="mui-container-fluid">
                        <span className="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;