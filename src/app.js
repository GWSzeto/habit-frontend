import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import CueForm from './pages/cueForm'
import Cues from './pages/cues'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/cue-form'>
          <CueForm/>
        </Route>
        <Route path='/cues'>
          <Cues/>
        </Route>
        <Route>
          <Cues/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
