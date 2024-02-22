const immutable = require("immutable");

const getImmutableObject = (object) => immutable.fromJS(object);

module.exports = getImmutableObject;
