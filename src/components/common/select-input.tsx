import React, { ChangeEvent, ChangeEventHandler } from "react";

export interface SelectInputProps {
    name: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    defaultOption: string;
    value: string;
    error: string;
    options: { [key: string]: string }[]
}

const SelectInput = (props: SelectInputProps) => {
    const { name, label, value, onChange, defaultOption, options, error } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {
                        options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
                    }
                </select>
                { error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default SelectInput
