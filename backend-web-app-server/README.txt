# Mock JWT Server Usage
------------------------------------------------

## Setup
------------------------------------------------

1. Run `npm install`

2. Make appropriate changes in `server.conf.json` file

## Start server
------------------------------------------------

To start server run `npm start`

### For starting server in HTTP
------------------------------------------------

For starting server in HTTP mode, make the `secure` flag false in `server.conf.json`.

### For starting server in HTTPS mode
------------------------------------------------

For starting server in HTTPS mode, make the `secure` flag true in `server.conf.json`.
Make sure that the certificatePath and privateKeyPath point to the SSL certificate and its private key in `server.conf.json`.
Also, make sure to provide the passphrase for the privateKey in `server.conf.json`.

## Configuration Reference
------------------------------------------------

All server configurations are present the `server.config.json` file.

- port :  The port on which to this server will listen for incoming HTTP requests.
- realm : The Account Id to use.
- labFQDN : Host region specific CCaaS FQDN. For example - `na.cc.avayacloud.com` for North America region.
- integrationId : The Integration ID available to your account administrator when the integration was created.
- clientId : Client ID required to authenticate CCaaS APIs.
- clientSecret : Secret for the above Client ID used to authenticate CCaaS APIs.
- TTL : TTL of JWT to be requested. Min 15 mins, Max 60 mins.
- secure : `true` to start this server in HTTPS mode. `false` for starting in HTTP mode. 
- certificatePath : Path to SSL certificate. (Required if `secure` is `true`).
- privateKeyPath : Path to private key. (Required if `secure` is `true`)
- passphrase : passphrase to decrypt private key.  (Required if `secure` is `true`)
- allowedOrigins : Array of origins allowed by this server. This is required for CORS. Typically the URL of the website hosting the chat widget. For example - `["http://www.example.com"]`. Use `["*"]` for allowing all origins.

Complete Example:

```json
{
    "port" : 3000,
    "realm" : "ABCDEF",
    "labFQDN" : "na.cc.avayacloud.com",
    "integrationId" : "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "clientId" : "<Client ID>",
    "clientSecret" : "<Client Secret>",
    "ttl": "30",
    "secure": true, 
    "certificatePath": "path/to/certs/certificate.pem",
    "privateKeyPath": "path/to/certs/private_key.pem",
    "passphrase": "passphrase",
    "allowedOrigins": ["http://www.example.com"]
}
```
