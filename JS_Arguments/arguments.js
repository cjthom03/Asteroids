
//
// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);
//
// Function.prototype.myBind = function() {
//   let args = Array.from(arguments);
//   const context = args[0];
//   const bindArgs = args.slice(1);
//   const that = this;
//   return function () {
//     const callArgs = Array.from(arguments);
//     console.log(callArgs);
//     that.apply(context, bindArgs.concat(callArgs));
//   };
// };


Function.prototype.myBind = function(context, ...bindArgs) {
  return (...callArgs) => {
    this.apply(context, bindArgs.concat(callArgs));
  };
};
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");








console.log(`--------------------------------------------------------------`);

function curriedSum(numArgs) {
  let numbers = [];

  let _curriedSum = function (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (let i = 0; i < numArgs; i++) {
        sum += numbers[i];
      }
      return sum;
    } else return _curriedSum;
  };
  return _curriedSum;
}



console.log(`--------------------------------------------------------------`);


//
// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   const that = this;
//   let _curriedFunc = function (arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return that.apply(that, args);
//     } else return _curriedFunc;
//   };
//   return _curriedFunc;
// };


Function.prototype.curry = function(numArgs) {
  let args = [];
  const that = this; //sumThree
  let _curriedFunc = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // return that.apply(that, args);
      return that(...args);
    } else return _curriedFunc;
  };
  return _curriedFunc;
};

function sumThree(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

 let sumCurry = sumThree.curry(3);
 sumCurry = sumCurry(4);
 sumCurry = sumCurry(20);
 sumCurry = sumCurry(6);


function sum(...args) {
  let ans = 0;
  args.forEach((el) => ans += el);
  return ans;
}
