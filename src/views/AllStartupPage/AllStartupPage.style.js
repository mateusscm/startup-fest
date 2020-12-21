import styled, { css } from "styled-components";

export const PanelStartups = styled.div`
  /* width: 1000px;
  background-color: transparent;
  height: auto;
  transition: width 0.5s ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 800px) {
    width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  } */

  & div {
    outline: none;
  }

  .slick-slider {
    padding: 10px 0px;
    /* padding: 10px 35px; */
  }

  .slick-prev {
    left: 0px;
    z-index: 1;
  }

  .slick-next {
    right: 0px;
    z-index: 1;
  }

  .slick-list {
    height: 190px;
  }
  .slick-slide > div {
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slick-current {
    padding: 0 15px;
  }

  /* .slick-slide {
    filter: blur(8px);
  } */
`;

export const ContainerStartups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const CardStartup = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  transition: all 300ms;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      width: calc(100% + 40px);
      height: calc(150px + 20px);
    `}

  .image {
    transition: all 300ms;
    ${({ selected }) =>
      !selected &&
      css`
        filter: blur(2px);
      `}
  }
`;
