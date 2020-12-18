import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import {
  TopBackground,
  PanelStartups,
  CardStartup,
  ImageStartup,
  SampleCard,
} from "./AllStartupPage.style";
import juristec from "../../assets/juristec.jpg";
import Slider from "react-slick";
import Loading from "../../components/Loading";
import More from "../../assets/svg/More";

export default function AllStartupPage() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [star, setStar] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState();
  const [openCollapse, setOpenCollapse] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/startups")
      .then(async (res) => {
        console.log(res.data["startups"]);
        setData(res.data["startups"]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    initialSlide: 1,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 500,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 534,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleBtn = (company) => {
    setLoading(true);
    // setOpenCollapse(false);
    setSelectedStartup(company);
    axios
      .get(`http://localhost:5000/startups/${company.id}`)
      .then(async (res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // const handleRate = (id, newRate, type) => {
  //   setStar((p) => ({ ...p, [type]: newRate }));
  //   axios
  //     .post(`http://localhost:5000/startups/rate/${id}`, {
  //       rate: newRate,
  //       type,
  //     })
  //     .then(async (res) => {
  //       console.log(res);
  //     });
  // };

  console.log(detail);

  const handleChangeCarousel = (old, next) => {
    toggleBtn(data?.[next]);
  };

  const handleOpenCollapse = () => {
    setOpenCollapse((p) => !p);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      {loading && <Loading />}
      <TopBackground />
      <PanelStartups>
        <Slider
          {...settings}
          beforeChange={(oldIndex, nextIndex) =>
            handleChangeCarousel(oldIndex, nextIndex)
          }
        >
          {data.length !== 0 &&
            data.map((startup) => (
              <>
                <CardStartup
                  key={startup.id}
                  onClick={() => toggleBtn(startup)}
                  selected={
                    selectedStartup ? selectedStartup.id === startup.id : false
                  }
                >
                  <ImageStartup
                    className="image"
                    src={startup.thumbnail ? startup.thumbnail : juristec}
                  />
                </CardStartup>
                <span>{startup.startup_name}</span>
              </>
            ))}
        </Slider>

        {Object.keys(detail).length !== 0 ? (
          <SampleCard open={openCollapse}>
            <div className="content">
              <div className="container-img">
                <ImageStartup
                  selected={false}
                  src={selectedStartup.thumbnail}
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
                    Avaliar &nbsp;
                    <More />
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
                  <b>Proposta:</b> A ideia / proposta agradou o ouvinte e teve
                  um bom impacto
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
                    onChange={ratingChanged}
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
                    onChange={ratingChanged}
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
                    onChange={ratingChanged}
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
        ) : (
          // <Carousel />
          <h3>Escolha uma empresa acima</h3>
        )}
      </PanelStartups>
    </>
  );
}
