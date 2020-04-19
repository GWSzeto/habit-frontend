import React from 'react'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'

// gql
import useCueFormGql from './cueForm.gql'

// styles
import {
  CueFormLayout,
  FixedBackButton,
  FormInputsContainer,
  InputContainer,
  CueInput,
  SubmitButton,
} from './curForm.styles'
import { ErrorText } from '../../styles/form'

const CueForm = () => {
  const history = useHistory()
  const { createCue } = useCueFormGql()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    const { data: newDAta, error } = await createCue(data)
    console.log("data: ", newDAta)
    console.log(error?.[0]?.message)
    history.push('/cues')
  }

  return (
    <CueFormLayout>
      <FixedBackButton>
        <img src='/assets/back_arrow.svg'/>
      </FixedBackButton>

      <FormInputsContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <CueInput name='location' ref={register({ required: true })} placeholder='Where are you right now' autoFocus/>
          {errors.location && <ErrorText>Must provide location</ErrorText>}
        </InputContainer>

        <InputContainer>
          <CueInput name='time' ref={register({ required: true })} value={format(new Date(), 'HH:mm')}/>
          {errors.time && <ErrorText>Must provide time</ErrorText>}
        </InputContainer>

        <InputContainer>
          <CueInput name='emotionalState' ref={register({ required: true })} placeholder='How do you feel right now'/>
          {errors.emotionalState && <ErrorText>Must provide emotional state</ErrorText>}
        </InputContainer>

        <InputContainer>
          <CueInput name='otherPeople' ref={register({ required: true })} placeholder='Who else is there'/>
          {errors.otherPeople && <ErrorText>Must provide other people</ErrorText>}
        </InputContainer>

        <InputContainer>
          <CueInput name='precedingAction' ref={register({ required: true })} placeholder='What did you do right before'/>
          {errors.otherPeople && <ErrorText>Must provide preceding action</ErrorText>}
        </InputContainer>

        <InputContainer>
          <CueInput name='habit' ref={register({ required: true })} placeholder='Which habit is it'/>
          {errors.habit && <ErrorText>Must provide location</ErrorText>}
        </InputContainer>

        <SubmitButton type='submit'>Submit</SubmitButton>
      </FormInputsContainer>
    </CueFormLayout>
  )
}

export default CueForm
