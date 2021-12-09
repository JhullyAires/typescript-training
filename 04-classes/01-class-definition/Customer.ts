class Customer {
    //properties
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// now let's use it
// now use a constructor
let myCustomer = new Customer("Martin", "Dixon");

//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);