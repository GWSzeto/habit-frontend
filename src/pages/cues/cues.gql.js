import { useQuery, gql } from '@apollo/client'

const GET_CUES = gql`
  query getCues {
    getCues {
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

const useCuesGql = () => {
  const { data: cuesData } = useQuery(GET_CUES)

  const cues = cuesData?.getCues

  return {
    cues
  }
}

export default useCuesGql
