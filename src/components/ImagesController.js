import React, { useState } from 'react';
import ToggleSwitch from "./toggle/ToggleSwitch";
import ImagesContent from "./ImagesContent";

const ImagesController = ({ paths }) => {
  const [scrollingChecked, setScrollingChecked] = useState(false);
  const [allImagesChecked, setAllImagesChecked] = useState(false);
  const [primaryByDefault, setPrimaryByDefault] = useState(true);

  const fromEvent = scrollingChecked ? "scrolling" : "mouse over";
  const toEvent = scrollingChecked ? "mouse over" : "scrolling";

  const onChangeAllImages = () => {
    setAllImagesChecked(!allImagesChecked);
    setPrimaryByDefault(!primaryByDefault)
  }

  const onChangeEvent = () => {
    setScrollingChecked(!scrollingChecked);
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
          checked={scrollingChecked}
          className="switch-event"
          label={`Switch ${fromEvent} event to ${toEvent}`}
          onChange={onChangeEvent}
        />
      </div>
      <ImagesContent event={fromEvent} primaryByDefault={primaryByDefault} paths={paths} />
    </div>
  );
}

export default ImagesController;
