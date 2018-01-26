import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
