import React from "react";
import ReactStars from "react-rating-stars-component";
import Close from "../../assets/svg/Close";
import More from "../../assets/svg/More";
import { ImageStartup, SampleCard } from "./SampleCards.style";
import noImage from "../../assets/no-image.png";

export default function SampleCards({
  openCollapse,
  selectedStartup,
  detail,
  handleOpenCollapse,
  ratingChanged,
  handleRate,
}) {
  return (
    <SampleCard open={openCollapse}>
      <div className="content">
        <div className="container-img">
          <ImageStartup
            selected={false}
            src={
              !selectedStartup.thumbnail.includes("startup_3")
                ? selectedStartup.thumbnail
                : noImage
            }
          />
        </div>
        <div className="container-info">
          <span>{detail.startup_name}</span>
          <span>{detail.description}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "auto",
              alignItems: "flex-end",
            }}
          >
            <span>{detail.city}</span>
            <button
              className="button-open"
              type="button"
              // onClick={() => handleRate(detail.id, 3, "pitch")}
              onClick={handleOpenCollapse}
            >
              {!openCollapse ? "Avaliar" : "Fechar"}&nbsp;
              {!openCollapse ? <More /> : <Close />}
            </button>
          </div>
        </div>
      </div>
      <span className="badge">{detail.category}</span>
      <div className="collapsable">
        <div className="explanation">
          <span className="title">Faça a sua votação!</span>
          <span className="subtitle">
            Você deverá classificar a empresa de acordo com as modalidades
            abaixo:
          </span>
          <span className="desc">
            <b>Proposta:</b> A ideia / proposta agradou o ouvinte e teve um bom
            impacto
          </span>
          <span className="desc">
            <b>Apresentação/Pitch:</b> Se a startup soube demonstrar a sua
            proposta
          </span>
          <span className="desc">
            <b>Desenvolvimento:</b> No estagio atual do produto / serviço,
            atende bem a proposta?
          </span>
        </div>
        <div className="rating">
          <div className="rate">
            <span>Proposta: </span>
            <ReactStars
              count={5}
              onChange={(newRating) =>
                handleRate(detail.id, newRating, "proposta")
              }
              size={32}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="rate">
            <span>Apresentação/Pitch: </span>
            <ReactStars
              count={5}
              onChange={(newRating) =>
                handleRate(detail.id, newRating, "pitch")
              }
              size={32}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="rate">
            <span>Desenvolvimento: </span>
            <ReactStars
              count={5}
              onChange={(newRating) =>
                handleRate(detail.id, newRating, "desenvolvimento")
              }
              size={32}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
    </SampleCard>
  );
}
