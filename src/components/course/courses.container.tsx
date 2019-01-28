import React, { Component, FormEvent } from 'react';
import { Course } from '../../models/course';
import { connect, DispatchProp } from 'react-redux';
import { State } from '../../store/state';
import * as courseActions from '../../actions/course.actions';

export interface CourseState {
    course: Course;
}

export class CoursesContainer extends Component<DispatchProp, CourseState> {
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
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add course</h2>

                <input onChange={this.onTitleChange}
                    type="text"
                    value={this.state.course.title} />

                <input type="submit" value="save" onClick={this.onClickSave} />
            </div>
        )
    }
}

function mapStateToProps(state: State, ownProps: any) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesContainer);
