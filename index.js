'use strict';

/**
 * Builds an enumeration with keys equal to their value given passed in function arguments
 *
 * example:
 *
 *   var ANIMALS = simpleKeyMirror('giraffe', 'lion', 'wombat');
 *   var myPet = ANIMALS.wombat;
 *   var isValidAnimal = !!ANIMALS[myPet];
 *   var isAgainValidAnimal = ANIMALS[myPet];
 *
 *
 * The last couple lines could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  "key1", "key2"
 *   Output: {key1: key1, key2: key2}
 *
 *
 * example 2:
 *
 *   var ANIMALS = simpleKeyMirror(['giraffe', 'lion', 'wombat']);
 *   var myPet = ANIMALS.wombat;
 *   var isValidAnimal = !!ANIMALS[myPet];
 *   var isAgainValidAnimal = ANIMALS[myPet];
 *
 *
 * The last couple lines could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  ["key1", "key2"]
 *   Output: {key1: key1, key2: key2}
 *
 * @param {Array | ...strings} [arr] - list of values to become keys
 * @return {object}
 */

function simpleKeyMirror(arr) {
  var args;

  if (!Array.isArray(arr)) {
    var length = arguments.length;
    var key = 0;

    args = Array(length);
    for (length; key < length; key++) {
      args[key] = arguments[key];
    }
  } else {
    args = arr;
  }

  return args.reduce(function (o, v) {
    if (!o[v]) {
      o[v] = v;
    }
    return o;
  }, {});
}

module.exports = simpleKeyMirror;

