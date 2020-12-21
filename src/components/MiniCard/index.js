import React from "react";
import { MiniCards } from "./MiniCard.style";
import ReactStars from "react-rating-stars-component";
import noImage from "../../assets/no-image.png";

export default function MiniCard({
  startupName,
  image,
  badge,
  count,
  position,
}) {
  return (
    <MiniCards src={!image.includes("startup_3") ? image : noImage}>
      <span className="position">{`${position}º`}</span>
      <div className="image" />
      <div className="infos">
        <span>{startupName}</span>
        <ReactStars
          count={5}
          size={32}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
          value={count}
        />
      </div>
      <span className="badge">{badge}</span>
    </MiniCards>
  );
}
