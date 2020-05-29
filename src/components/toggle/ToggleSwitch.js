import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, label, className, onChange }) => {
    const id = `checkbox-${className}`;
    return (
        <div className={`toggle-switch ${className}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label
                style={{ background: checked && "darkgrey" }}
                className="switch-button-back"
                htmlFor={id}
            >
                <span className="switch-button" />
            </label>
            <label className="switch-label">{label}</label>
        </div>
    );
};

export default ToggleSwitch;
