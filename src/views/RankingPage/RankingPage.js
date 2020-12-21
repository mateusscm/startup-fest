import React, { useEffect, useState } from "react";
import axios from "axios";
import { Banner, ContainerPage, ContainerRank } from "./RankingPage.style";

import banner from "../../assets/banner2.png";
import MiniCard from "../../components/MiniCard";
import Loading from "../../components/Loading";

export default function RankingPage({ data }) {
  const [loading, setLoading] = useState(false);
  const [startupRated, setStartupRated] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/startups/rate")
      .then(async (res) => {
        if (res.data) {
          const cache = {};
          const aux = {};
          Object.keys(res.data).forEach((type) => {
            aux[type] = res.data[type].map((obj) => {
              if (cache[obj.id]) {
                return { ...obj, ...cache[obj.id] };
              } else {
                cache[obj.id] = data
                  .filter((startup) => startup.id === parseInt(obj.id))
                  .reduce((acc, cur) => cur, {});
                return { ...obj, ...cache[obj.id] };
              }
            });
          });
          setStartupRated(aux);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [data]);

  const sortF = (a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  };

  // console.log(data);
  console.log(startupRated);

  return (
    <>
      {loading && <Loading />}
      <ContainerPage>
        <Banner src={banner} />
        <ContainerRank>
          <div className="content-rank">
            <span>Proposta</span>
            {startupRated?.["proposta"].sort(sortF).map((info, position) => (
              <MiniCard
                startupName={info.startup_name}
                badge={info.category}
                image={info.thumbnail}
                count={info.count}
                position={position + 1}
              />
            ))}
          </div>
          <div className="content-rank">
            <span>Apresentação / Pitch</span>
            {startupRated?.["pitch"].sort(sortF).map((info, position) => (
              <MiniCard
                startupName={info.startup_name}
                badge={info.category}
                image={info.thumbnail}
                count={info.count}
                position={position + 1}
              />
            ))}
          </div>
          <div className="content-rank">
            <span>Desenvolvimento</span>
            {startupRated?.["desenvolvimento"]
              .sort(sortF)
              .map((info, position) => (
                <MiniCard
                  startupName={info.startup_name}
                  badge={info.category}
                  image={info.thumbnail}
                  count={info.count}
                  position={position + 1}
                />
              ))}
          </div>
        </ContainerRank>
      </ContainerPage>
    </>
  );
}
