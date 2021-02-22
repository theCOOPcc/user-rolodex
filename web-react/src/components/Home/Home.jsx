import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome to the Coop.</h1>
      <div>
        <Link to="/user">Are you signing up as a User?</Link>
      </div>
      <div>
        <Link to="/mentor">Are you signing up as a Mentor?</Link>
      </div>
      <div>
        <Link to="/project">Are you creating a new project?</Link>
      </div>
    </>
  )
}

export default Home
