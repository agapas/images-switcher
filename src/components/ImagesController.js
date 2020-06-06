import React, { useState } from "react";
import ImagesContent from "./ImagesContent";
import ToggleSwitch from "./ToggleSwitch";

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
          key="all-images"
          checked={allImagesChecked}
          className="switch-all-images"
          label="Switch all images"
          onChange={onChangeAllImages}
        />
        <ToggleSwitch
          key="event"
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
