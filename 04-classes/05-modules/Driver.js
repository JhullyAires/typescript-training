"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
// now let's use it
// now use a constructor
let myCustomer = new Customer_1.Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
