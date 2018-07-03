import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    let res = await axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`);
    this.setState({students: res.data});
  }

  render() {
    let students = this.state.students.map(e => {
      return(
        <Link to={`/student/${e.id}`} key={e.id}>
          <h3>{`${e.first_name} ${e.last_name}`}</h3>
        </Link>
      );
    });

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}