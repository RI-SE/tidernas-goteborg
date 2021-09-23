import axios from 'axios'

const config = {
  url: process.env.API,
  headers: {
    'Content-Type': 'application/json'
  }
}

const runBackendScript = async (params) => {
  try {
    const route = params.queue ? '/queue' : ''
    const response = await axios.get(
      config.url + route + '?q=' + params.query,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default {
  runBackendScript
}
