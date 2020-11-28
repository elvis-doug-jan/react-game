import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  /* Normalize CSS */
  ${reset}

  * {
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Maven Pro', sans-serif;
    font-size: 16px;
  }

  button, input, textarea {
    outline: none;
  }
`
