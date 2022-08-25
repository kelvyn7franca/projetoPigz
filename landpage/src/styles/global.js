import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

}

:root {
    font-size: 62.5%;
    

}

body{
    max-width: 414px;
    margin: auto;
}

button, a, p, h1, h2 {
    font-family: 'Poppins', sans-serif;

}

`
