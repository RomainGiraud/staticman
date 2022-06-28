const md5 = require('md5')

const upcase = (value) => {
  return String(value).toUpperCase()
}

const downcase = (value) => {
  return String(value).toLowerCase()
}

const config = require('./../config')
const NodeRSA = require('node-rsa')
key = new NodeRSA()
key.importKey(config.get('rsaPrivateKey'), 'private')
const rsa = (value) => {
    return key.encrypt(value, 'base64', 'utf-8')
}

module.exports = {
  rsa,
  md5,
  upcase,
  downcase
}
