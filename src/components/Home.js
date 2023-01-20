import React from 'react'
import Navbar from './Navbar/Navbar'
import { Button } from './Button.style'

function Home() {
  return (
    <React.Fragment>
        <Navbar/>
        <h1>Bienvenue sur notre super site React !</h1>
        <Button backgroundColor="red">Test</Button>
        <Button backgroundColor="green">Test</Button>
        <Button backgroundColor="violet">Test</Button>

    </React.Fragment>
  )
}

export default Home