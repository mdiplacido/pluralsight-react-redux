import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";

import { CourseActionCreatorFactory, CourseActionCreator } from "../../actions/course.actions";
import { State } from "../../store/state";
import { connect } from "react-redux";
import CourseForm from "./course-form";
import { Course } from "../../models/course";

export interface ManageCoursePageDispatchProp {
    actions: CourseActionCreator;
}

export interface MangeCoursePageProps extends ManageCoursePageDispatchProp {
    course: Course;
}

export interface ManageCoursePageState {
    course: Course,
    errors: {
        title?: string;
    }
}

export class ManageCoursePage extends Component<MangeCoursePageProps, ManageCoursePageState> {
    constructor(props: MangeCoursePageProps) {
        super(props);
        this.state = {
            course: { ...props.course },
            errors: {
            }
        };
    }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm 
            allAuthors={[]} 
            course={this.state.course} 
            errors={this.state.errors} 
            onSave={this.onSave} 
            onChange={this.onChange}
            loading={false} />
      </div>
    )
  }

  onSave = () => {

  }

  onChange = () => {

  }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(CourseActionCreatorFactory(), dispatch)
    }
}

function mapStateToProps(state: State, ownProps: any): ManageCoursePageState {
    const course: Course = { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };
    return {
        course,
    } as Partial<ManageCoursePageState> as ManageCoursePageState;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
