import React, { useEffect, useState} from 'react'
import {getSatellites, getSatelliteById} from '../apis/iss'


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

const [singleSatellite, setSingleSatellite] = useState(null) 

//
const fetchSatelliteById = (id) => {
  getSatelliteById(id)
    .then(fetchedSatellite => {
      setSingleSatellite(fetchedSatellite)
    })
} 

  //something to activate the retrieval of the data
  useEffect(() => {
    fetchSatellites()
  }, [])

  return (
    <>
      <ul>
      {satellites.map(s => {
        return (
          <li key={s.id}><button onClick={() => fetchSatelliteById(s.id)}>{s.name}</button></li>
        )
      })}
      </ul>
      {singleSatellite && (
        <p>
          The {singleSatellite.name} is at co-ordinates: {singleSatellite.latitude}, {singleSatellite.longitude}
        </p>
      )}
    </>  
  )
}

export default SatelliteListing
