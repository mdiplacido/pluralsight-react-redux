import React, { Component, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { Course } from "../../models/course";
import { State } from "../../store/state";
import CourseList from "./course-list";

export interface CourseContainerProps {
    courses: Course[];
}

export interface CourseDispatchProp {
    actions: CourseActionCreator;
}

export class CoursesContainer extends Component<CourseContainerProps & CourseDispatchProp> {
    constructor(props: CourseContainerProps & CourseDispatchProp, context: React.Context<any>) {
        super(props, context);
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}></CourseList>
            </div>
        )
    }
}

function mapStateToProps(state: State, ownProps: any): CourseContainerProps {
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
