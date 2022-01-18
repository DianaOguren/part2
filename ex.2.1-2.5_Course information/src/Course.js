import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = (props) => {
    return (
      <div>
        <Header header={props.course.name}/>
        <Content content={props.course.parts} />
        <Total parts={props.course.parts}/>
      </div>
    )
}

export default Course;