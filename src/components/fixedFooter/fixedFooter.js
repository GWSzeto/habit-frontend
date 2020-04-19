import React from 'react'

// styles
import {
  FixedFooterLayout,
  LinkSection,
} from './fixedFooter.styles'

const defaultLinks = [
  {
    name: 'Cues',
    link: '/cues'
  },
  {
    name: 'Cue Form',
    link: '/cue-form'
  }
]

const FixedFooter = ({ links = defaultLinks }) => (
  <FixedFooterLayout>
    {links.map(({ name, link }) => (
      <LinkSection to={link}>{name}</LinkSection>
    ))}
  </FixedFooterLayout>
)

export default FixedFooter
