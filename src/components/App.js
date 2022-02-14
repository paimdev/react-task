import React, { Component } from "react";

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
    this.setState({
      taskList: this.state.taskList.concat(this.state.input),
      input: ''
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
