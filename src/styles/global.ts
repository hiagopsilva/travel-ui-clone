import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
  background: #FFFF;
}

  body, input, button, textarea {
  font: 600 18px Inter, sans-serif;
}
  button {
    cursor: pointer;
  }
`;
