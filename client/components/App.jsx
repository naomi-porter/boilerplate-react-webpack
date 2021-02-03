import React from 'react'
import {getSatellites, getSatelliteById} from '../apis/iss'
import SatelliteListing from './SatelliteListing'

const App = () => {
  return (
    <>
    <h1>API's</h1>
    <SatelliteListing />
    </>
  )
}

export default App
