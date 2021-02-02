import React, { useEffect, useState} from 'react'
import {getSatellites} from '../apis/iss'


//list of satellite names
const SatelliteListing = () => {

  //somewhere to store the data
  const [satellites, setSatellites] = useState([]) 

  //some way of retrieving the data
  const fetchSatellites = () => {
    getSatellites()
      .then(fetchedSatellites => {
        setSatellites(fetchedSatellites)
      })
  } 

  //something to activate the retrieval of the data
  useEffect(() => {
    fetchSatellites()
  }, [])

  return (
    <ul>
    {satellites.map(s => {
      return (
        <li>{s.name}</li>
      )
    })}
    </ul>
  )
}

export default SatelliteListing
