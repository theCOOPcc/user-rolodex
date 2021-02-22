import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import UserForm from './pages/UserForm/UserForm'
import ProjectForm from './pages/ProjectForm/ProjectForm'
import MentorForm from './pages/MentorForm/MentorForm'

const App = () => {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/user">
          <UserForm />
        </Route>
        <Route path="/project">
          <ProjectForm />
        </Route>
        <Route path="/mentor">
          <MentorForm />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
