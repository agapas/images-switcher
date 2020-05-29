import React from "react";
import OnScrollImage from "./OnScrollImage";

const ImageChangeOnScroll = () => {
    const speakersIds = [187, 1530, 1124];
    const bwImgPath = "../images/bw/";
    const colorImgPath = "../images/color/";
    return (
        <div>
            {speakersIds.map(speakerId => {
                return (
                    <div key={speakerId}>
                        <OnScrollImage
                            primaryImg={`${bwImgPath}Speaker-${speakerId}.jpg`}
                            secondaryImg={`${colorImgPath}Speaker-${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;
