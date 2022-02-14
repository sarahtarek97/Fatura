//require all what Ive create to support autthorization
const RBAC = require("easy-rbac");
const opts = require('./policy');
const rbac = RBAC.create(opts);

//export rbac to use in authoization process
module.exports = rbac