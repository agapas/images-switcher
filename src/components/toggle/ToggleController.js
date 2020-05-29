import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

const ToggleController = () => {
  const [eventsChecked, setEventsChecked] = useState(false);
  const [allImagesChecked, setAllImagesChecked] = useState(false);

  const fromEvent = eventsChecked ? "scrolling" : "mouse over";
  const toEvent = eventsChecked ? "mouse over" : "scrolling";

  return (
    <div className="toggle-controller">
      <ToggleSwitch
        key="1"
        checked={allImagesChecked}
        className="switch-all-images"
        label="Switch all images"
        onChange={() => setAllImagesChecked(!allImagesChecked)}
      />
      <ToggleSwitch
        key="2"
        checked={eventsChecked}
        className="switch-event"
        label={`Switch ${fromEvent} event to ${toEvent}`}
        onChange={() => setEventsChecked(!eventsChecked)}
      />
    </div>
  );
}

export default ToggleController;
