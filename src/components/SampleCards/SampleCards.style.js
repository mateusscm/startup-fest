import styled, { css } from "styled-components";

export const SampleCard = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  ${({ open }) =>
    open &&
    css`
      margin-bottom: 20px;
    `}

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    height: 300px;
  }

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
    background-color: #7e8aad;
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

  .button-open {
    padding: 10px;
    border-style: none;
    background-color: #ff5722;
    border-radius: 17px;
    color: white;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    & svg,
    path {
      fill: white;
      pointer-events: none;
      transition: transform 500ms;
    }

    &:hover {
      background-color: #e46740;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }

  @media screen and (max-width: 800px) {
    .content,
    .collapsable {
      flex-direction: column;
      height: auto;
      padding-top: 10px;

      .container-img {
        width: 100%;
      }
    }
  }

  .collapsable {
    transition: height 800ms;
    display: flex;
    overflow: hidden;
    width: 100%;
    ${({ open }) =>
      open
        ? css`
            height: auto;
            padding: 10px;
          `
        : css`
            height: 0px;
          `}
  }

  .collapsable > .explanation,
  .rating {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .collapsable {
    .explanation {
      .title {
        text-align: center;
        margin-bottom: 10px;
        font-size: 1.3rem;
        font-weight: bold;
      }

      .subtitle {
        margin-bottom: 5px;
        color: #606060;
        font-weight: bold;
      }

      .desc {
        margin-bottom: 3px;
      }
    }

    .rating {
      padding-left: 20px;
      display: flex;
      flex-direction: column;

      .rate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        & > span {
          margin-right: 10px;
          font-size: 1.3rem;
        }
      }

      @media screen and (max-width: 800px) {
        padding-left: 0px;
      }
    }
  }
`;

export const ImageStartup = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;
