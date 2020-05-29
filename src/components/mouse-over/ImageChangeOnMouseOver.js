import React from "react";
import OnMouseOverImage from "./OnMouseOverImage";

const ImageChangeOnMouseOver = ({ paths, primaryByDefault }) => {
    const primaryIndex = primaryByDefault ? 0 : 1;
    const secondaryIndex = primaryByDefault ? 1 : 0;
    return (
        <div className="mouse-over-images">
            {paths.map((p, i) => {
                return (<OnMouseOverImage key={i} primaryImg={p[primaryIndex]} secondaryImg={p[secondaryIndex]} alt="" />);
            })}
        </div>
    );
};

export default ImageChangeOnMouseOver;
