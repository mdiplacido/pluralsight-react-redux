import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";

import { Course } from "../../models/course";
import SelectInput from "../common/select-input";
import TextInput from "../common/text-input";

export interface AuthorForDropDown {
    value: string;
    text: string;
}

export interface CourseFormProps {
    course: Course;
    allAuthors: AuthorForDropDown[];
    onSave: (event: FormEvent) => void;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    loading: boolean;
    errors: {
        title?: string;
        category?: string;
        length?: string;
        authorId?: string
    };
}

const CourseForm = (props: CourseFormProps) => {
    const { course, allAuthors, onSave, onChange, loading, errors } = props;

    return (
        <div>
            <form onSubmit={onSave}>
                <TextInput
                    name="title"
                    label="Title"
                    value={course.title}
                    onChange={onChange}
                    error={errors && errors.title || ""} />

                <SelectInput
                    name="authorId"
                    label="Author"
                    value={course.authorId}
                    defaultOption="Select Author"
                    options={allAuthors as any}
                    onChange={onChange}
                    error={errors && errors.authorId || ""} />

                <TextInput
                    name="category"
                    label="Category"
                    value={course.category}
                    onChange={onChange}
                    error={errors && errors.category || ""} />

                <TextInput
                    name="length"
                    label="Length"
                    value={course.length}
                    onChange={onChange}
                    error={errors && errors.length || ""} />

                <input
                    type="submit"
                    disabled={loading}
                    value={loading ? 'Saving...' : 'Save'}
                    className="btn btn-primary" />
            </form>
        </div>
    )
}

export default CourseForm
