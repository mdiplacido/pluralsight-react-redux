import React, { Component, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { Course } from "../../models/course";
import { State } from "../../store/state";

export interface CourseState {
    course: Course;
}

export interface CourseDispatchProp {
    actions: CourseActionCreator;
}

export class CoursesContainer extends Component<State & CourseDispatchProp, CourseState> {
    constructor(props: any, context: React.Context<any>) {
        super(props, context);
    }

    courseRow(course: Course, index: number) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        )
    }
}

function mapStateToProps(state: State, ownProps: any): State {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): CourseDispatchProp {
    // todo: why do we have to cast dispatch to any.  kind of goofy.
    return { 
       actions: bindActionCreators(CourseActionCreatorFactory(), dispatch as any)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
