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
  height: 500px;
  transition: width 0.5s ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 800px) {
    width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 95vw;
    margin-top: 75px;
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

export const ImageStartup = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SampleCard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  .container-img {
    height: 270px;
    width: 280px;
    padding: 0px 10px;
    flex: 1;

    & > div {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .container-info {
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    height: 100%;
    flex: 1;
    & > span:first-child {
      font-size: 1.6em;
      font-weight: bold;
      background-color: rgba(166, 78, 146, 0.99);
      color: white;
      padding: 5px 10px;
      margin-bottom: 5px;
      border-radius: 5px;
      width: max-content;
    }
    & > span:nth-child(2) {
      font-size: 1.2em;
    }
  }

  .badge {
    position: absolute;
    display: inline-block;
    right: -10px;
    top: 0;
    margin: 15px 0px;
    border-radius: 4px;
    text-transform: capitalize;
    color: #fff;
    background-color: #c2c2c2;
    padding: 5px 10px;

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: #999;
      position: absolute;
      right: 4px;
      bottom: -3px;
      z-index: -1;
      transform: rotate(45deg);
    }
  }
`;
