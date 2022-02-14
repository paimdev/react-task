import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      taskList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.input !== '') {
      this.setState({
        taskList: this.state.taskList.concat(this.state.input),
        input: ''
      });
    }
  };

  render() {
    const items = this.state.taskList.map(i => <li key={uniqid()}>{i}</li>);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">Submit</button>
        </form>
        <Overview items={items} />
      </div>
    );
  }
}

export default App;
