import { Component } from "react";

export default class Bomb extends Component {
  constructor() {
    super();
    this.state = {};
    this.interval = null;
    this.timeout = null;
    this.bomber = this.bomber.bind(this);
    this.blast = this.blast.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handleStop() {
    console.log("Stopped!");
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }
  blast() {
    console.log("Bomb blasted!");
    alert("Bomb blasted!");
  }
  bomber() {
    this.timeout = setTimeout(this.blast, 3000);
    console.log("bomb will blast in 3 seconds");
    alert("bomb will blast in 3 seconds");
  }
  componentWillMount() {
    this.interval = setInterval(this.bomber, 10000);
  }
  render() {
    return (
      <>
        <h1>Bomb</h1>
        <button onClick={this.handleStop}>Stop</button>
      </>
    );
  }
}