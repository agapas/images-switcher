import React, { useState, useEffect } from "react";
import ImagesContent from "./ImagesContent";
import ToggleSwitch from "./ToggleSwitch";

const isMobileSize = () => {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return w < 480;
};

const ImagesController = ({ paths }) => {
  const [scrollingChecked, setScrollingChecked] = useState(false);
  const [allImagesChecked, setAllImagesChecked] = useState(false);
  // const [primaryByDefault, setPrimaryByDefault] = useState(true);
  const [primaryByDefault, setPrimaryByDefault] = useState(false);

  // useEffect is used here just for practicing React Hooks
  // to skip it enable line 13
  useEffect(() => setPrimaryByDefault(true), []);

  const isMobile = isMobileSize();
  const mouseOverOrTouchEvent = isMobile ? "touch" : "mouse over";
  const fromEvent = scrollingChecked ? "scrolling" : mouseOverOrTouchEvent;
  const toEvent = scrollingChecked ? mouseOverOrTouchEvent : "scrolling";

  const onChangeAllImages = () => {
    setAllImagesChecked(!allImagesChecked);
    setPrimaryByDefault(!primaryByDefault)
  }

  const onChangeEvent = () => {
    setScrollingChecked(!scrollingChecked);
  }

  return (
    <div className={`images-controller ${isMobile ? "mobile" : ""}`}>
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
      <ImagesContent event={fromEvent} primaryByDefault={primaryByDefault} paths={paths} isMobile={isMobile} />
    </div>
  );
}

export default ImagesController;
