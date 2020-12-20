import React, { useEffect, useState } from "react";
import axios from "axios";
import { Banner, ContainerPage, ContainerRank } from "./RankingPage.style";

import banner from "../../assets/banner2.png";
import MiniCard from "../../components/MiniCard";
import Loading from "../../components/Loading";

export default function RankingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/startups/rate")
      .then(async (res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <ContainerPage>
        <Banner src={banner} />
        <ContainerRank>
          <div className="content-rank">
            <span>Proposta</span>
            <MiniCard />
          </div>
          <div className="content-rank">
            <span>Apresentação / Pitch</span>
            <MiniCard />
          </div>
          <div className="content-rank">
            <span>Desenvolvimento</span>
            <MiniCard />
          </div>
        </ContainerRank>
      </ContainerPage>
    </>
  );
}
