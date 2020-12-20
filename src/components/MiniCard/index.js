import React from "react";
import { MiniCards } from "./MiniCard.style";
import ReactStars from "react-rating-stars-component";
import noImage from "../../assets/no-image.png";

export default function MiniCard() {
  return (
    <MiniCards src={noImage}>
      <span className="position">1º</span>
      <div className="image" />
      <div className="infos">
        <span>Nome da startup</span>
        <ReactStars
          count={5}
          onChange={() => {}}
          size={32}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
      <span className="badge">Badge</span>
    </MiniCards>
  );
}
