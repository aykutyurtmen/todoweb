const apisauce = require('apisauce');


export default function RestClient (baseURI, defaultHeaders = {}) {
  const self = this;
  this.baseURI = baseURI;
  this.defaultHeaders = defaultHeaders;
  this.api = apisauce.create({
    baseURL: self.baseURI,
    headers: self.defaultHeaders
  })

  this.get = async (path, body = {}, header = {}) => {
    return self.api.get(path, body, {headers: {...defaultHeaders, ...header}})
  }

  this.post = async (path, body = {}, header = {}) => {
    return self.api.post(path, body, {headers: {...defaultHeaders, ...header}})
  }

  this.put = async (path, body = {}, header = {}) => {
    return self.api.put(path, body, {headers: {...defaultHeaders, ...header}})
  }

  this.delete = async (path, body = {}, header = {}) => {
    return self.api.delete(path, body, {headers: {...defaultHeaders, ...header}})
  }
}
