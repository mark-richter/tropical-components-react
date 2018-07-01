import React, { Component } from "react";

function CardImage({ posterImage, image, title, size }) {
  let height;
  if (size == "small") height = "150px";
  if (size == "medium") height = "225px";
  if (size == "large") height = "300px";
  return (
    <div className="card-image">
      {posterImage && (
        <div
          className="img"
          style={{
            backgroundImage: `url(${posterImage})`,
            height: `${height}`
          }}
        />
      )}
      {!posterImage && (
        <div
          className="img"
          style={{
            boxShadow: "none",
            height: `${height}`,
            color: "black"
          }}
        />
      )}
      {image && (
        <div className="badge-image">
          <img
            src={image}
            alt="https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
            width="100"
            height="100"
          />
        </div>
      )}
      <div className="card-title">{title}</div>
      {posterImage && (
        <div
          className="colored-shadow"
          style={{
            backgroundImage: `url(${posterImage})`,
            opacity: 1
          }}
        />
      )}
    </div>
  );
}

export default CardImage;
