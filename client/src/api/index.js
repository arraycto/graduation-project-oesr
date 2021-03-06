import axios from 'axios'
import * as utils from '../utils'

export function fetchUserInfo () {
  let url = '/oesr/user'
  return axios.get(url).then(utils.checkHttpStatus).then(utils.checkResponse).catch()
}
