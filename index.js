#!/usr/bin/env node
'use strict'

const axios = require('axios')

// happily borrowing from
// https://github.com/5ika/smilodon/blob/master/src/index.js

function register(server, appname, appurl = 'http://example.org') {
  const params = {
    client_name: appname,
    redirect_uris: appurl,
    scopes: 'read write follow'
  };
  return axios.post(`${server}/api/v1/apps`, params)
    .then((response) => {
      const result = { }
      result.id = response.data.client_id;
      result.secret = response.data.client_secret;
      result.server = server;
      return result
    })
    .catch((error) => console.error(error));
}

module.exports = register
