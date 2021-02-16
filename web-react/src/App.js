import React from 'react'
import Button from './components/Button/Button'
// form is getting an error: "Invalid hook call"
import ProjectForm from './pages/ProjectForm/ProjectForm'
// import Users from './components/Users/Users'

const App = () => {
  return (
    <>
      <Button />
      <ProjectForm />
      {/* <Users /> */}
    </>
  )
}

export default App
