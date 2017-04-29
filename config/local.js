const fs = require('fs')
const os = require('os')

module.exports = {

    /**
     * Current Node Information
     */
    port: 3030,
    issuer: "http://localhost:3030",
    routes: __dirname + "/endpoints/routes.js",


    /**
     * Databases
     */
    mongoPort: 27017,
    mongoURL: "mongodb://localhost/blitz",


    /**
     * Authorization properties
     */
    cert: fs.readFileSync(__dirname + "/certs/auth_private.pem", "utf-8"),


    /**
     * Cluster config
     */
    cores: os.cpus().length
}