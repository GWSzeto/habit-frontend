import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FixedFooterLayout = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 3rem;
  justify-content: space-around;
  padding-bottom: 0.5rem;
  width: 100%;
`

export const LinkSection = styled(Link)`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-size: 1em;
  font-weight: 600;
`
