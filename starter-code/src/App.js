import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="first">
        <img src="/images/ironhack-logo.svg"></img>
        <img src="/images/menu-top.svg"></img>
        <h1> Say Hello to ReactJs </h1>
        <p class="description">You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <button className="awesome">Awesome</button>
        </div>  
        <div className="second">
        <div className="component1">
        <img src ="/images/icon1.png"></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create intercativ UIs.</p>
        </div>
        <div className="component2">
        <img src ="/images/icon2.png"></img>
        <h3>Components</h3>
        <p>Build encapsuled components that manage their state</p>
        </div>

        <div className="component3">
        <img src ="/images/icon3.png"></img>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
        </div>

        <div className="component4">
        <img src ="/images/icon4.png"></img>
        <h3>JSX</h3>
        <p>Statically-types, designed to run on modern browsers.</p>
        </div>
        </div>  

    </div>

    );
  }
}

export default App;