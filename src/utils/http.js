import axios from 'axios'

export const get = ({
  url,
  params=null
}) => {
  return axios({
    method: 'get',
    url,
    params
  })
  .then((result) => {
    return result.data
  })
  .catch((err) => {
    return err.message
  })
}