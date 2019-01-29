import React, { Component, FormEvent, Dispatch } from 'react';
import { Course } from '../../models/course';
import { connect, DispatchProp } from 'react-redux';
import { State } from '../../store/state';
import * as courseActions from '../../actions/course.actions';

export interface CourseState {
    course: Course;
}

export interface CourseDispatchProp {
    createCourse: (course: Course) => void;
}

export class CoursesContainer extends Component<State & CourseDispatchProp, CourseState> {
    state: CourseState = {
        course: { title: "" }
    }

    constructor(props: any, context: React.Context<any>) {
        super(props, context);
    }

    onTitleChange = (event: FormEvent<HTMLInputElement>) => {
        const course = this.state.course;
        course.title = event.currentTarget.value;
        this.setState({ course });
    }

    onClickSave = () => {
        this.props.createCourse(this.state.course);
    }

    courseRow(course: Course, index: number) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>

                <input onChange={this.onTitleChange}
                    type="text"
                    value={this.state.course.title} />

                <input type="submit" value="save" onClick={this.onClickSave} />
            </div>
        )
    }
}

function mapStateToProps(state: State, ownProps: any): State {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch: Dispatch<courseActions.CourseActions>): CourseDispatchProp {
    return {
        createCourse: (course: Course) => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
