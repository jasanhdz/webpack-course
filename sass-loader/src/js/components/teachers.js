import React from 'react';
import Teacher from './teacher';
import '../../css/teachers.scss';

class Teachers extends React.Component {
  render() {
    return(
      <ul className="Teachers">
      {this.props.data.teachers.map((teacherData) => {
        return <Teacher {...teacherData}/>
      })
      }
      </ul>
    )
  }
}

export default Teachers;