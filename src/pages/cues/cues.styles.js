import styled from 'styled-components'
import { Layout } from '../../styles/containers'
import { offWhite, cardBlue } from '../../styles/colors'
import { Card } from '../../styles/cards'
import { Link } from 'react-router-dom'

export const CueCard = styled(Card)`
  display: flex;
  flex-flow: column nowrap;
`

export const CuesLayout = styled(Layout)`
  display: flex;
  background-color: ${offWhite};
  justify-content: center;
  padding-bottom: 4.5rem;
`

export const CuesContainer = styled.div`
  flex: 1;
  max-width: 650px;
  display: flex;
  flex-flow: column nowrap;

  & > ${CueCard} {
    margin: 1rem;
  }
`

export const Title = styled.div`
  font-size: 1.25em;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ alternate }) => alternate ? cardBlue : 'white'};
  margin: 0 -1rem;
  padding: 0.5rem 1rem;

  ${({ last }) => last && `
    padding-bottom: 0;
  `}
`

export const FixedPlusButton = styled(Link)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
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