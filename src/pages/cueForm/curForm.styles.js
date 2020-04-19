import styled from 'styled-components'
import { Layout } from '../../styles/containers'
import { Input } from '../../styles/form'
import { Button } from '../../styles/buttons'
import { offWhite, blue, lightBlue } from '../../styles/colors'

export const CueFormLayout = styled(Layout)`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${offWhite};
  align-items: center;
  justify-content: center;
`

export const FormInputsContainer = styled.form`
  flex: 0.75;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  & > div {
    margin: 1rem;
  }
`

export const CueInput = styled(Input)`
  transition: all 0.35s ease-in-out;
  border-radius: 10px;
  padding: 1rem;

  &:focus {
    background-color: white;
  }

  @media only screen and (orientation: landscape) {
    font-size: 1.75em;
  }
`

export const SubmitButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  align-self: center;
  background-color: ${blue};
  border-radius: 10px;
  color: white;
  transition: all 0.1s ease-in;

  &:active {
    opacity: 0.9;
  }

  @media only screen and (orientation: landscape) {
    font-size: 1.25em;
  }
`

export const FixedBackButton = styled(Button)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  border-radius: 50%;

  & > img {
    max-width: 100%;
  }
`