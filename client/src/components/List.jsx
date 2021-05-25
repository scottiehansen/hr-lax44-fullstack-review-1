import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map(student => (
      <ListElement student={student} key={student.id} getStudents={props.getStudents} />
    ))}
  </div>

export default List;