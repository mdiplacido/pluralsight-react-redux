import React, { ChangeEvent, ChangeEventHandler } from "react";

export interface TextInputProps {
    name: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value: string;
    error: string;
}

const TextInput = (props: TextInputProps) => {
    const { error, label, name, placeholder, value, onChange } = props;

    let wrapperClass = 'form-group';

    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input 
                    type="text" 
                    name={name} 
                    className="form-control" 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
                    {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}

export default TextInput
