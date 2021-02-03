import request from 'superagent'

const baseUrl = 'https://api.wheretheiss.at/v1/'

export function getSatellites() {
  return request.get(baseUrl + 'satellites')
  .then(res => res.body)
}


export function getSatelliteById(id) {
  return request.get(baseUrl + 'satellites/' + id)
  .then(res => res.body)
}