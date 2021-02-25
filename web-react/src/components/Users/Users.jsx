import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this)
  }

  async loadData(client) {
    const participant = await client.query({
      query: gql`
        {
          Participant(email: "leo@bardo.com") {
            firstName
            email
          }
        }
      `,
    })
    this.setState({
      participant: participant.data,
      loading: participant.loading,
    })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    return (
      <>
        {this.state.participant ? (
          <div>{this.state.participant.Participant[0].email}</div>
        ) : (
          <ApolloConsumer>
            {(client) => (
              <button onClick={() => this.loadData(client)}>Query Leo</button>
            )}
          </ApolloConsumer>
        )}
      </>
    )
  }
}

export default Users
