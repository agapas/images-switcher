import React from 'react';
  
const ImagesSource = ({ source }) => (
    <div className="images-source">
      Sorce of images:
      <a href={source}>{source}</a>
    </div>
);

export default ImagesSource;
