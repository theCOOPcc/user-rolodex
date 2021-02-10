import React, { Component } from 'react'
// import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this)
  }

  async loadData(client) {
    const engineers = await client.query({
      query: gql`
        {
          engineers {
            name
          }
        }
      `,
    })
    this.setState({ engineers })
  }

  render() {
    return (
      <>
        <p>{this.state.users.name}</p>
      </>
    )
  }
}

export default Users
