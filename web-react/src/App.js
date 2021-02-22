import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserForm from './pages/UserForm/UserForm'
import ProjectForm from './pages/ProjectForm/ProjectForm'

const App = () => {
  return (
    <Router>
      <h1>Welcome to the Coop.</h1>
      <div>
        <Link to="/user">Are you a User?</Link>
      </div>
      <div>
        <Link to="/project">Are you creating a new project?</Link>
      </div>
      <Switch>
        <Route path="/user">
          <UserForm />
        </Route>
        <Route path="/project">
          <ProjectForm />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
