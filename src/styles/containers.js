import styled from 'styled-components'

const responsiveFontSize = (
  minFont, 
  maxFont, 
  minScreen = 320, 
  maxScreen = 1200, 
  units = 'px') => `
    calc(${minFont}${units} + ${maxFont - minFont} * 
    (100vw - ${minScreen}${units})/${maxScreen - minScreen})`

export const Layout = styled.div`
  min-height: 100vh;
  font-size: ${responsiveFontSize(18, 20)};
  font-family: 'Montserrat', sans-serif;
`