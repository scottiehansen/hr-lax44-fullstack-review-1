import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Add from './Add.jsx';
import Random from './Random.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      studentlist: []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getStudents()
  }

  getStudents() {
    axios.get(`/api/students`)
      .then(({ data }) => {
        this.setState({
          studentlist: data
        })
      })
      .catch((err) => console.error(err))
  }

  changePage(e) {
    this.setState({
      page: e.target.value
    })
  }

  render() {
    if (this.state.page === 'add') {
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Add getStudents={this.getStudents} />
        </div>
      )
    } else if (this.state.page === 'list') {
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <List students={this.state.studentlist} getStudents={this.getStudents} />
        </div>
      )
    } else if (this.state.page === 'random') {
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Random students={this.state.studentlist} />
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changePage}>Add Student</button>
          <button value='list' onClick={this.changePage}>List Students</button>
          <button value='random' onClick={this.changePage}>Random Student</button>
        </div>
      )
    }
  }
}