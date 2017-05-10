//Problem 1
function createMyObject() {

  const myObj={
    foo: 'bar',
    answerToUniverse:42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  }
  return myObj;
}

//Problem 2
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
}

//Problem 3
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName:  function(){
      return this.firstName + ' '+ this.lastName;
    }
  };
  return person;
}

//Problem 4


