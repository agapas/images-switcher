import React, { useState } from 'react';
import ToggleSwitch from "./toggle/ToggleSwitch";
import ImageChangeOnMouseOver from "./mouse-over/ImageChangeOnMouseOver";

const ImagesController = ({ paths }) => {
  const [eventsChecked, setEventsChecked] = useState(false);
  const [allImagesChecked, setAllImagesChecked] = useState(false);
  const [primaryByDefault, setPrimaryByDefault] = useState(false);

  const fromEvent = eventsChecked ? "scrolling" : "mouse over";
  const toEvent = eventsChecked ? "mouse over" : "scrolling";

  const onChangeAllImages = () => {
    setAllImagesChecked(!allImagesChecked);
    setPrimaryByDefault(!primaryByDefault)
  }

  const onChangeEvent = () => {
    setEventsChecked(!eventsChecked);
  }

  return (
    <div className="images-controller">
      <div className="toggles">
        <ToggleSwitch
          key="1"
          checked={allImagesChecked}
          className="switch-all-images"
          label="Switch all images"
          onChange={onChangeAllImages}
        />
        <ToggleSwitch
          key="2"
          checked={eventsChecked}
          className="switch-event"
          label={`Switch ${fromEvent} event to ${toEvent}`}
          onChange={onChangeEvent}
        />
      </div>
      <ImageChangeOnMouseOver paths={paths} primaryByDefault={primaryByDefault} />
    </div>
  );
}

export default ImagesController;
