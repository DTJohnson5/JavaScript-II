// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

var outerFunc = function() {
  var message =
    "Ladies, will you please shut it! Listen to me. Yes, I lied to you. No, I don't love you. Of course it makes you look fat. I have never been to Brussels. It is pronounced egregious. And by the way, no, I never actually met Pizarro, though I love his pies. And all of this pales to utter insignificance in light of the fact that my ship is once again gone. Savvy?";
  var innerFunc = function() {
    console.log(message);
  };
  return innerFunc;
};

var myFunc = outerFunc();
myFunc();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

    let count = 0;
  
    function increase() {
      return (count += 1);
    }
    increase();
    console.log(count);
    increase();
    console.log(count);
  };
  
  console.log(counterMaker());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
