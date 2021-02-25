import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: inherit;
    opacity: 0.3; /* Firefox */
    font-size: 90%;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    overscroll-behavior-y: none;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
