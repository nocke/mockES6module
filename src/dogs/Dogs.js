
class Dogs {
    constructor(state) {
        this.dogs = ['Hasso, Bello'];
    }

	getDogs() {

		// // Array test:
		// var a = [1, 2, 3];
		// console.log( a.includes(2) ); // true
		// console.log( a.includes(4) ); // false

		// Set Test:
		var mySet = new Set(this.dogs);
		mySet.add('Fiffy');
		console.log("getDogs() called: ", mySet);

		return this.dogs;
	}
}

export default Dogs;
