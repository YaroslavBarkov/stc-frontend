import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from  '../Header/Header';
import Footer from '../Footer/Footer';
import './colors.sass';
import Content from "../Content/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
