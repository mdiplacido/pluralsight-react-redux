import React from "react";

import { Course } from "../../models/course";
import CourseListRow from "./course-list-row";

export interface ICourseListProps {
  courses: Course[];
}

const CourseList = (props: ICourseListProps) => {
  return (
    <React.Fragment>
      <br/>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {
            props.courses.map(course => <CourseListRow key={course.id} course={course}></CourseListRow>)
          }
        </tbody>
      </table>
    </React.Fragment>
  )
};

export default CourseList;