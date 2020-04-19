import { useMutation, gql } from '@apollo/client'
import { GET_CUES } from '../cues/cues.gql'

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
  const [createCueMutation] = useMutation(CREATE_CUE, {
    update: (cache, { data: { createCue: newCue }}) => {
      const { getCues: currentCues } = cache.readQuery({
        query: GET_CUES,
      })
      cache.writeQuery({
        query: GET_CUES,
        data: {
          getCues: [...currentCues, newCue]
        }
      })
    }
  })

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
