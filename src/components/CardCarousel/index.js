import React from "react";
import { CardStartup, ImageStartup } from "./CardCarousel.style";
import noImage from "../../assets/no-image.png";

export default function CardCarousel({ startup, toggleBtn, selectedStartup }) {
  return (
    <>
      <CardStartup
        onClick={() => toggleBtn(startup)}
        selected={selectedStartup ? selectedStartup.id === startup.id : false}
      >
        <ImageStartup
          className="image"
          src={
            !startup.thumbnail.includes("startup_3")
              ? startup.thumbnail
              : noImage
          }
        />
      </CardStartup>
      <span>{startup.startup_name}</span>
    </>
  );
}
