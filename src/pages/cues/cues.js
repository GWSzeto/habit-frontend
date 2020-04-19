import React from 'react'

// gql
import useCuesGql from './cues.gql'

// styles
import {
  CuesLayout,
  CuesContainer,
  CueCard,
  Title,
  Field,
  FixedPlusButton,
} from './cues.styles'

const Cues = () => {
  const { cues } = useCuesGql()
  
  return (
    <CuesLayout>
      <CuesContainer>
        {cues && cues.map(({ id, location, time, date, emotionalState, otherPeople, precedingAction, habit }) => (
          <CueCard key={id}>
            <Title>{habit}</Title>
            <Field alternate>
              <div>Location</div>
              <div>{location}</div>
            </Field>

            <Field>
              <div>Time</div>
              <div>{time}</div>
            </Field>

            <Field alternate>
              <div>Date</div>
              <div>{date}</div>
            </Field>

            <Field>
              <div>Emotional State</div>
              <div>{emotionalState}</div>
            </Field>

            <Field alternate>
              <div>Other People</div>
              <div>{otherPeople}</div>
            </Field>

            <Field last>
              <div>Preceding Action</div>
              <div>{precedingAction}</div>
            </Field>

          </CueCard>
        ))}
      </CuesContainer>

      <FixedPlusButton to='/cue-form'>
        <img src='/assets/plus.svg'/>
      </FixedPlusButton>
    </CuesLayout>
  )
}

export default Cues
