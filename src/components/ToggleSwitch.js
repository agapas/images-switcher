import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
    const fromEvent = isOn ? "scrolling" : "mouse hover";
    const toEvent = isOn ? "mouse hover" : "scrolling";
    return (
        <div className="toggle-switch">
            <input
                id="switch-checkbox"
                type="checkbox"
                checked={isOn}
                onChange={handleToggle}
            />
            <label
                style={{ background: isOn && "black" }}
                className="switch-button-back"
                htmlFor="switch-checkbox"
            >
                <span className="switch-button" />
            </label>
            <label className="switch-label">{`Switch ${fromEvent} to ${toEvent}`}</label>
        </div>
    );
};

export default ToggleSwitch;
