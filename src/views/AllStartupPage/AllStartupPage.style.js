import styled, { css } from "styled-components";

export const TopBackground = styled.div`
  background: linear-gradient(
    94.2deg,
    #3f4b69 0%,
    rgba(166, 78, 146, 0.99) 100%
  );
  width: 100%;
  height: 225px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const PanelStartups = styled.div`
  margin-top: 100px;
  width: 1000px;
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
    margin-top: 90px;
  }

  & div {
    outline: none;
  }

  .slick-slider {
    /* padding: 10px 0px; */
    padding: 10px 35px;
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

export const LogoEdit = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  & svg {
    width: 150px;
    height: 90px;
  }
`;
