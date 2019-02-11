import React, {Component} from 'react';

class SidebarBtn extends Component {

    state = {
        active: false
    };

    render() {
        return (
            <li>
                <strong className={this.state.active ? "active" : ""}
                        onClick={this.activate}>{this.props.name}</strong>
            </li>
        )
    }

    activate = () => {
        this.setState({
            active: !this.state.active
        });
    }
}


export default SidebarBtn;