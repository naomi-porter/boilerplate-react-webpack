import request from 'superagent'

const baseUrl = 'https://api.wheretheiss.at/v1/'

export function getSatellites() {
  return request.get(baseUrl + 'satellites')
  .then(res => res.body)
}

getSatellites().then(console.log)

export function getSatellite(id) {
  
}