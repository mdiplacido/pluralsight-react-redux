import React, { Component, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { Course } from "../../models/course";
import { State } from "../../store/state";
import CourseList from "./course-list";
import { withRouter, RouteComponentProps } from "react-router";

export interface CourseContainerProps {
    courses: Course[];
}

export interface CourseDispatchProp {
    actions: CourseActionCreator;
}

class CoursesContainer extends Component<CourseContainerProps & CourseDispatchProp & RouteComponentProps> {
    // TODO: investigate context.  apparently it is deprecated in favor of new Provider context pattern
    // https://reactjs.org/docs/context.html
    constructor(props: CourseContainerProps & CourseDispatchProp & RouteComponentProps) {
        super(props);
    }

    redirectToAddCourse = () => this.props.history.push("/course");

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input onClick={this.redirectToAddCourse} type="submit" className="btn btn-primary" value="Add Course" />

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesContainer));
