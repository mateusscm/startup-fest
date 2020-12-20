import AllStartupPage from "../views/AllStartupPage";
import RankingPage from "../views/RankingPage/RankingPage";

export const routes = [
  {
    path: "/",
    component: AllStartupPage,
    exact: true,
    alias: "Home",
  },
  {
    path: "/rating",
    component: RankingPage,
    exact: true,
    alias: "Ranking",
  },
];
