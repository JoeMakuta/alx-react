const immutable = require("immutable");

const getImmutableObject = (object) => immutable.fromJS(object);

console.log(
  getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  })
);

module.exports = getImmutableObject;
