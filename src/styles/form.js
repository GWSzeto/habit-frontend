import styled from 'styled-components'
import { errorRed } from './colors'

export const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1em;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`

export const ErrorText = styled.div`
  color: ${errorRed};
`