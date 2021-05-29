import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Add from './Add.jsx';
import Random from './Random.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()


  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get(`/api/students`)
      .then(response => {
        this.setState({
          studentlist: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  changepage(e){
    // Todo: Add your logic to "change pages" here on button click
    this.setState({
      page: e.target.value
    })

  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={this.changepage}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List studentlist={this.state.studentlist} getStudents={this.getStudents}  />
          <button value='home' onClick={this.changepage}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.studentlist}/>
          <button value='home' onClick={this.changepage}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changepage}>Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}