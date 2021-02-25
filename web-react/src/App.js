import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import UserForm from './pages/UserForm/UserForm'
import ProjectForm from './pages/ProjectForm/ProjectForm'
import MentorForm from './pages/MentorForm/MentorForm'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  // process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Home />
        <Users />
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
    </ApolloProvider>
  )
}

export default App
