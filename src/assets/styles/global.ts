import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  /* Normalize CSS */
  ${reset}

  * {
    box-sizing: border-box;
  }

  body, input, button {
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
  }

  button, input, textarea {
    outline: none;
  }
`
