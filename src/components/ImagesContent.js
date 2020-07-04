import React from "react";
import OnScrollImage from "./OnScrollImage";
import OnMouseOverImage from "./OnMouseOverImage";
import OnTouchImage from "./OnTouchImage";

export const getIndexes = (primaryByDefault) => {
    const primaryIndex = primaryByDefault ? 0 : 1;
    const secondaryIndex = primaryByDefault ? 1 : 0;
    return { primaryIndex, secondaryIndex };
};

const ImagesContent = ({ event, primaryByDefault, paths, isMobile }) => {
    const EventComponent = event === "scrolling"
        ? OnScrollImage
        : isMobile
            ? OnTouchImage
            : OnMouseOverImage;
    const { primaryIndex, secondaryIndex } = getIndexes(primaryByDefault);
    return (
        <div className="images-content">
            {paths.map((p, i) => {
                return <EventComponent key={i} primaryImg={p[primaryIndex]} secondaryImg={p[secondaryIndex]} alt="" />;
            })}
        </div>
    );
};

export default ImagesContent;
