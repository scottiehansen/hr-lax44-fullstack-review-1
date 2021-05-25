import React from 'react';
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      student: {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }
  componentDidMount() {
    this.getRandomStudent()
  }

  getRandomStudent(){
    var ind = Math.floor(Math.random() * this.props.students.length);

    this.setState({
      student: this.props.students[ind]
    })
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>
          <img src={this.state.student.imgurl}></img>
          <h1>{this.state.student.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}