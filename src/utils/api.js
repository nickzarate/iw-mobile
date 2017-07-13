import ipAddress from './ip'

export default api = {

  baseURL: `http://${ipAddress}:3000/`,

  buildURL: (params) => params != null ? `?${Object.keys(params).map(k => `${k}=${params[k]}`).join('&')}` : '',

  checkStatus: function(response) {
    console.log(response)
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error("There was an error");
      error.response = response;
      throw error;
    }
  },

  makeGetRequest: function(path, params = null) {
    return fetch(`${this.baseURL}${path}${this.buildURL(params)}`/*, {*/
      // method: 'GET',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      // body: null
    /*}*/)
    .then(this.checkStatus)
    .then(res => res.json())
  }
}
