import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #DFDFDF;
    background-repeat: round;
    font-size: 14px;
    color: #000;
    font-family: 'Kite One', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    }
`;
