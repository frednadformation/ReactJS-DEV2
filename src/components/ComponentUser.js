import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentUser() {
  return (
    <UserConsumer>
        {
          username => {
            return <div>Hello {username}</div>
          }
        }
    </UserConsumer>
  )
}

export default ComponentUser