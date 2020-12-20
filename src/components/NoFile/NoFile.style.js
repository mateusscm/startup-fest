import styled from "styled-components";

const StyledNoFile = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: transparent;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); */
  color: #898989;
  /* padding: 1rem; */
  margin: 1.5% auto;
  transition: all 0.5s;
  border-radius: 4px;

  & .content {
    position: relative;
    padding: 0px 20px;
    min-height: 20.5rem;
    & > svg {
      width: 100%;
      height: 19rem;
      /* position: absolute; */
      bottom: 0;
      /* opacity: 50%; */
      z-index: -1;
    }
    & section {
      margin: 0px;
      padding: 5px 0px;
      line-height: 2.5rem;
      text-align: start;
      font-size: 1.2rem;

      & span {
        line-height: 1.5rem;
      }
    }
  }
`;

export default StyledNoFile;
