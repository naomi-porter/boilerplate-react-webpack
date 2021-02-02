import React from 'react'
import {getSatellites} from '../apis/iss'
import SatelliteListing from './SatelliteListing'

const App = () => {
  return (
    <>
    <h1>Testing API's</h1>
    <SatelliteListing />
    </>
  )
}

export default App
