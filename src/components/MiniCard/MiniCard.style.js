import styled from "styled-components";

export const MiniCards = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  position: relative;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin-top: 10px;

  .position {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
  }

  .image {
    width: 75px;
    height: 60px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .infos {
    padding: 5px 10px;

    & > span {
    }
  }

  .badge {
    position: absolute;
    display: inline-block;
    right: -10px;
    top: 0;
    margin: 5px 0px;
    border-radius: 4px;
    text-transform: capitalize;
    color: #fff;
    background-color: #7e8aad;
    padding: 5px 10px;
    font-size: 0.7rem;

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
