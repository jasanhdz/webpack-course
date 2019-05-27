import React from 'react';
import Teacher from './teacher';

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