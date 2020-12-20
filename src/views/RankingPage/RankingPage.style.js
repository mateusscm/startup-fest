import styled from "styled-components";

export const ContainerPage = styled.div``;

export const ContainerRank = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: baseline;

  & > div {
    flex: 1;
  }

  .content-rank:first-child {
    margin-right: 20px;
  }

  .content-rank:nth-child(3) {
    margin-left: 20px;
  }

  .content-rank {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > span {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    .content-rank:first-child {
      margin-right: 0px;
    }

    .content-rank:nth-child(3) {
      margin-left: 0px;
    }

    & > div {
      width: 100%;
      margin-top: 20px;

      &:first-child {
        margin-top: 0px;
      }
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;
