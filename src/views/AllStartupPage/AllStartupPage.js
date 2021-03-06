import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { PanelStartups } from "./AllStartupPage.style";

import Slider from "react-slick";
import Loading from "../../components/Loading";
import CardCarousel from "../../components/CardCarousel";
import SampleCards from "../../components/SampleCards";
import NoFile from "../../components/NoFile";

export default function AllStartupPage({ data }) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [star, setStar] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState();
  const [openCollapse, setOpenCollapse] = useState(false);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    initialSlide: 1,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    setDetail({});
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

  const handleRate = (id, newRate, type) => {
    setStar((p) => ({ ...p, [type]: newRate }));
    axios
      .post(`http://localhost:5000/startups/rate/${id}`, {
        rate: newRate,
        type,
      })
      .then(async (res) => {
        console.log(res);
      });
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
      <PanelStartups>
        <Slider {...settings}>
          {data.length !== 0 &&
            data.map((startup) => (
              <CardCarousel
                key={startup.id}
                startup={startup}
                toggleBtn={toggleBtn}
                selectedStartup={selectedStartup}
                star={star}
              />
            ))}
        </Slider>

        {Object.keys(detail).length !== 0 ? (
          <SampleCards
            openCollapse={openCollapse}
            selectedStartup={selectedStartup}
            detail={detail}
            handleOpenCollapse={handleOpenCollapse}
            ratingChanged={ratingChanged}
            handleRate={handleRate}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <hr style={{ width: "50%" }} />
            <NoFile />
          </div>
          // <h3>Escolha uma empresa acima</h3>
        )}
      </PanelStartups>
    </>
  );
}
