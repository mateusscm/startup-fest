import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
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
import Carousel from "../../assets/svg/Carousel";

export default function AllStartupPage() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [star, setStar] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/startups")
      .then(async (res) => {
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

  console.log(detail);

  return (
    <>
      {loading && <Loading />}
      <TopBackground />
      <PanelStartups>
        <Slider {...settings}>
          {data.map((startup) => (
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
          <SampleCard>
            <div className="container-img">
              <ImageStartup selected={false} src={selectedStartup.thumbnail} />
            </div>
            <div className="container-info">
              <span>{detail.startup_name}</span>
              <span>{detail.description}</span>
              <span>{detail.city}</span>
              <button
                type="button"
                onClick={() => handleRate(detail.id, 3, "pitch")}
              >
                vai
              </button>
            </div>
            <span className="badge">{detail.category}</span>
          </SampleCard>
        ) : (
          // <Carousel />
          <h3>Escolha uma empresa acima</h3>
        )}
      </PanelStartups>
    </>
  );
}
