import React from 'react';
import './FormInput.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} type="text" {...otherProps}/>
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null} {/*This label will always have the className form-input-label but will only have the className shrink when the user enters something */}
    </div>
);

export default FormInput;