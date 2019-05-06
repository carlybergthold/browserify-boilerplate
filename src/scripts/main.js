// import sayHello from "./hello"
// import sayGoodbye from "./goodbye"
// import SandwichMaker from "./sandwichMaker"

// sayHello()
// sayGoodbye()

// SandwichMaker.placeOrder("rye", "capicola", "provolone")

/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/
// import createCar from "./createCar"
// import garage from "./garageFactory"

// // Create two cars using the function you imported
// const mustang = createCar("Ford", "Mustang")
// const accord = createCar("Honda", "Accord")
// const tesla = createCar("Tesla", "Model X")

// // Park the cars in the garage
// garage.setInventory(mustang);
// garage.setInventory(accord);
// garage.setInventory(tesla);

// // Drive the cars for a while
// console.log(mustang.drive("the grocery store"));
// console.log(accord.drive("Indianapolis"));
// console.log(tesla.drive("the moon"));

// console.log(garage.getOneCar(mustang))

// console.table(garage);

import contactData from "./contactCollection"
import contactList from "./contactList"

// print contact list to DOM
contactList.displayContacts();

// add event listener to save button that posts new contact object to database
document.querySelector("#save-btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("button clicked");
    contactData.saveContacts();
});