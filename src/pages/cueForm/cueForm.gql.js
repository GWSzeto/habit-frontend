import { useMutation, gql } from '@apollo/client'

const CREATE_CUE = gql`
  mutation createCue($input: CueInput!) {
    createCue(input: $input) {
      id
      location
      time
      date
      emotionalState
      otherPeople
      precedingAction
      habit
    }
  }
`

const useCueFormGql = () => {
  const [createCueMutation] = useMutation(CREATE_CUE)

  const createCue = cueData => createCueMutation({
    variables: {
      input: cueData
    }
  })

  return {
    createCue
  }
}

export default useCueFormGql
