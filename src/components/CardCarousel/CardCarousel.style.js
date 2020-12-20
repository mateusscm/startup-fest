import styled, { css } from "styled-components";

export const ImageStartup = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
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
