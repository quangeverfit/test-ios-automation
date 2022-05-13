const jwt = require('jsonwebtoken');
const fs = require("fs")
const privateKey = fs.readFileSync('AuthKey_KY66U87JAX.p8')
const options = {
  header: {
    "alg": "ES256",
    "kid": "KY66U87JAX",
    "typ": "JWT"
  }
}

let now = new Date().getTime() / 1000
let exp = now +  3*60
const payload = {
  "iss": "dc7206cb-b549-42d5-b47d-cf8192886eb0",
  "iat": now,
  "exp": exp,
  "aud": "appstoreconnect-v1"
}
console.log("Payload", payload);
console.log("options", options);

var token = jwt.sign(payload, privateKey, options);
console.log("Token is", token);
