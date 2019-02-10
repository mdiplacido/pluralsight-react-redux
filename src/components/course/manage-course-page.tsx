import React, { ChangeEvent, Component, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { Course } from "../../models/course";
import { State } from "../../store/state";
import CourseForm, { AuthorForDropDown } from "./course-form";

export interface ManageCoursePageDispatchProp {
    actions: CourseActionCreator;
}

export interface MangeCoursePageProps extends ManageCoursePageDispatchProp {
    course: Course;
    authors: AuthorForDropDown[];
}

export interface ManageCoursePageState {
    course: Course,
    errors: {
        title?: string;
    }
}

class ManageCoursePage extends Component<MangeCoursePageProps, ManageCoursePageState> {
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
            allAuthors={this.props.authors} 
            course={this.state.course} 
            errors={this.state.errors} 
            onSave={this.onSave} 
            onChange={this.onChange}
            loading={false} />
      </div>
    )
  }

  onSave = (event: FormEvent) => {
    event.preventDefault();  // kind of dumb.  we are preventing the submit, really that should be hidden from this consumer
    this.props.actions.saveCourse(this.state.course);
  }

  onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState(prev => ({
        course: {
            ...prev.course,
            [field]: value
        }
    }));
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(CourseActionCreatorFactory(), dispatch)
    }
}

function mapStateToProps(state: State, ownProps: any): ManageCoursePageState {
    const course: Course = { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };
    const authorsFormattedForDropdown: AuthorForDropDown[] = state.authors.map(a => ({ value: a.id, text: `${a.firstName} ${a.lastName}`}));
    return {
        course,
        authors: authorsFormattedForDropdown
    } as Partial<ManageCoursePageState> as ManageCoursePageState;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
