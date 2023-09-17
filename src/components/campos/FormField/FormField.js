import React, { useEffect, useState } from "react";
import './FormFieldStyle.css'

export function FormField(props) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { label, type, className, required } = props;
    return (
        <div className={`form-div ${className}`}>
            <h3>{label}</h3>
            {
                type === "textarea" ?
                    <textarea
                        className={`campo ${className}`}
                        value={value}
                        onChange={handleChange}
                        required={required}
                    />
                    :
                    <input
                        className={`campo ${className}`}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        required={required}
                    />
            }
        </div>
    );
}
