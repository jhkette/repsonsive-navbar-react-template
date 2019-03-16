import React, { Component } from 'react';
import logo from './logo.svg';
import Toolbar from './toolbar/toolbar'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Backdrop from './backdrop/backdrop'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false})
  }
  render() {
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      sideDrawer =  <SideDrawer />;
      backdrop =  <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App" style={{height: '100%'}}>
        
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
      </div>
    );
  }
}

export default App;
