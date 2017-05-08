
class Dogs {
    constructor(state) {
        this.dogs = ['hasso, bello'];
    }

	getDogs() {

		// // Array test:
		// var a = [1, 2, 3];
		// console.log( a.includes(2) ); // true 
		// console.log( a.includes(4) ); // false

		// // Set Test:
		// var mySet = new Set();
		// mySet.add(1); // Set { 1 }
		// mySet.add(5); // Set { 1, 5 }
		// console.log(mySet);


		console.log("getDogs() called");
		console.dir( this.dogs );
		return this.dogs;
	}
}

export default Dogs;
