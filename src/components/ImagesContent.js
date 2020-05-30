import React from "react";
import OnScrollImage from "./OnScrollImage";
import OnMouseOverImage from "./OnMouseOverImage";

const getIndexes = (primaryByDefault) => {
    const primaryIndex = primaryByDefault ? 0 : 1;
    const secondaryIndex = primaryByDefault ? 1 : 0;
    return { primaryIndex, secondaryIndex };
};

const getEventComponent = (event, index, primaryImg, secondaryImg) => {
    return (event === "scrolling"
        ? <OnScrollImage key={index} primaryImg={primaryImg} secondaryImg={secondaryImg} alt="" />
        : <OnMouseOverImage key={index} primaryImg={primaryImg} secondaryImg={secondaryImg} alt="" />
    );
};

const ImagesContent = ({ paths, primaryByDefault, event }) => {
    const { primaryIndex, secondaryIndex } = getIndexes(primaryByDefault);
    return (
        <div className="mouse-over-images">
            {paths.map((p, i) => {
                return getEventComponent(event, i, p[primaryIndex], p[secondaryIndex]);
            })}
        </div>
    );
};

export default ImagesContent;
