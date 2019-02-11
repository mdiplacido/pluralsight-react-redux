import React, { ChangeEvent, Component, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { Course } from "../../models/course";
import { State } from "../../store/state";
import CourseForm, { AuthorForDropDown } from "./course-form";
import { withRouter, RouteComponentProps } from "react-router";

export interface ManageCoursePageDispatchProp {
    actions: CourseActionCreator;
}

export interface MangeCoursePageProps extends ManageCoursePageDispatchProp, RouteComponentProps {
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
    constructor(props: MangeCoursePageProps, context: any) {
        super(props, context);
        this.state = {
            course: { ...props.course },
            errors: {
            }
        };
    }

    componentDidUpdate(prevProps: Readonly<MangeCoursePageProps>, _prevState: Readonly<ManageCoursePageState>): void {
        // since the redux bound prop data will arrive late (it loads in one second after a page load) 
        // we may have a course id on the url but we didn't find a match the first time around in mapStateToProps
        // then when the data arrives map state to props finds it but now we need to update the component state
        // to match the one fund in the redux store.  really i think you would have a redux "load completed" state
        // and all components that need that state either wait until it is true or failed, in the meantime a spinny
        // would show.
        if (this.props.course.id !== prevProps.course.id) {
            this.setState({ course: { ...this.props.course }});
        }
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
        this.props.history.push("/courses");
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

function mapStateToProps(state: State, ownProps: MangeCoursePageProps): ManageCoursePageState {
    const course: Course = state.courses.find(c => c.id === (ownProps.match.params as any).id) ||
        { id: "", watchHref: "", title: "", authorId: "", length: "", category: "" };

    const authorsFormattedForDropdown: AuthorForDropDown[] = state.authors.map(a => ({ value: a.id, text: `${a.firstName} ${a.lastName}` }));
    return {
        ...ownProps,
        course,
        authors: authorsFormattedForDropdown
    } as Partial<ManageCoursePageState> as ManageCoursePageState;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
