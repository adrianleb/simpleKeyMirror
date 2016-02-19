SimpleKeyMirror
=========
Quickly create an object with values equal to its key names.

Similar to Facebook's keyMirror util but without the pain of having to write an object with every key value set to `null`;


Accepts either a list of function arguments or a first argument as an Array of strings.


Example
----
As function arguments:

```js
  var ANIMALS = simpleKeyMirror('giraffe', 'lion', 'wombat');
  var myPet = ANIMALS.wombat;
  var isValidAnimal = !!ANIMALS[myPet];
  var isAgainValidAnimal = ANIMALS[myPet];
```


With an Array of strings as first argument:

```js
  var ANIMALS = simpleKeyMirror(['giraffe', 'lion', 'wombat']);
  var myPet = ANIMALS.wombat;
  var isValidAnimal = !!ANIMALS[myPet];
  var isAgainValidAnimal = ANIMALS[myPet];
```


License
----
MIT © [Adrian le Bas](https://github.com/adrianleb)
