import React from "react";
import OnMouseOverImage from "./OnMouseOverImage";

const ImageChangeOnMouseOver = (paths) => {
    const pathsObject = paths.paths;
    return (
        <div className="mouseOverImages">
            {pathsObject.map((p, i) => {
                return (<OnMouseOverImage key={i} primaryImg={p[0]} secondaryImg={p[1]} alt="" />);
            })}
        </div>
    );
};

export default ImageChangeOnMouseOver;
