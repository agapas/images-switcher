import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, onChange }) => {
    const fromEvent = checked ? "scrolling" : "mouse over";
    const toEvent = checked ? "mouse over" : "scrolling";
    return (
        <div className="toggle-switch">
            <input
                id="switch-checkbox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <label
                className="switch-button-back"
                htmlFor="switch-checkbox"
            >
                <span className="switch-button" />
            </label>
            <label className="switch-label">{`Switch ${fromEvent} event to ${toEvent}`}</label>
        </div>
    );
};

export default ToggleSwitch;
