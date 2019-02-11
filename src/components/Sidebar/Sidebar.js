import React, { Component } from 'react';
import './Sidebar.css'
import SidebarBtn from './SidebarBtn';


class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar" className="mui--no-user-select">
                <div id="sidebar-brand" className="mui--appbar-line-height">
                    <span className="mui--text-title">Brand.io</span>
                </div>
                <div className="mui-divider"/>
                <ul>
                    <SidebarBtn name={"Камеры"}/>
                    <SidebarBtn name={"Карта"}/>
                    <SidebarBtn name={"Пользователи и группы"}/>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
