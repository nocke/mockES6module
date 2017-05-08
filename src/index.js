
// export, not import btw!  -  Durchleiter...
export {default as Dogs} from './dogs/Dogs.js';
export {default as cats} from './cats';


import Dogs  from './dogs/Dogs.js';
import cats from './cats';   // suffices!

console.log("The index file");


// quick self-test

// let d = new Dogs();
// d.getDogs();

// let c = cats;
// console.dir(c);

