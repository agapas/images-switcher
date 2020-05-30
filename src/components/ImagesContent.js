import React from "react";
import OnScrollImage from "./OnScrollImage";
import OnMouseOverImage from "./OnMouseOverImage";

const getIndexes = (primaryByDefault) => {
    const primaryIndex = primaryByDefault ? 0 : 1;
    const secondaryIndex = primaryByDefault ? 1 : 0;
    return { primaryIndex, secondaryIndex };
};

const ImagesContent = ({ event, primaryByDefault, paths }) => {
    const EventComponent = event === "scrolling" ? OnScrollImage : OnMouseOverImage;
    const { primaryIndex, secondaryIndex } = getIndexes(primaryByDefault);
    return (
        <div className="mouse-over-images">
            {paths.map((p, i) => {
                return <EventComponent key={i} primaryImg={p[primaryIndex]} secondaryImg={p[secondaryIndex]} alt="" />;
            })}
        </div>
    );
};

export default ImagesContent;
