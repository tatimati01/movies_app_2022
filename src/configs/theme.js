import {createGlobalStyle} from "styled-components"

const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headingColor: "lightblue"
}

const lightTheme = {
    body: "#fff",
    textColor: "#000",
    headingColor: "#d23669"
}

const GlobalStyles = createGlobalStyle`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h2{
   color: ${props => props.theme.headingColor};
 }
`

export {
    GlobalStyles,
    lightTheme,
    darkTheme
}