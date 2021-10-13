// console.log("Welcome to the main module")
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// function chicken () {
//     console.log("chicken")
// }

// function monkey () {
//     console.log("monkey")
// }

// function chickenMonkey(){
//     console.log("chicken monkey")
// }

// for (let i = 1; i <= 100; i++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (i % 5 === 0) chicken(); 
//         // console.log(chicken) // Only 2, 4, 6 will appear
    
// }

// function chicken() {
// let five;

// for(let i = 0; i < 100; i++){

//     if (five % 5 === 0) {
//         console.log(five)
//     } return five
// }
// }


// function monkey () {

// }

// function printChicken(taco) {
//    let five; {
//     for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//         // Divide the current number by 2, and check if the remainder is 0
//         if (currentNumber % 5 === 0) {
//           console.log(currentNumber,"chicken");
    
//        }
//       }
//    }

// // ***********************
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0) {
//       console.log(currentNumber,"chicken");

//    }
//   }

//   for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 7 === 0) {
//       console.log(currentNumber,"Monkey");

//    }
//   }

//   for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0, currentNumber % 7 === 0) {
//       console.log(currentNumber,"chicken Monkey");

//    }
//   }
  //****************** */
// function printChicken() {
// console.log ("chicken");

//   for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0) printChicken(); {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }
// }
// printChicken();

// Correct code
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//      if (currentNumber % 5 === 0) {
//         console.log("chicken")
//     } if (currentNumber % 7 === 0) {
//         console.log("monkey")
//     } if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("chickenmonkey")
//     } else if (currentNumber % 1 === 0 && currentNumber % 5 !== 0 && currentNumber % 7 !== 0) {
//         console.log(currentNumber);
//     }
// }


// let bandNumber = 1

// const takeNumber = function (bandName) {
//      let  num = `${bandNumber}. ${bandName}`;
//      bandName++;
//      return num;
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// let bandNumber = 1

// const takeNumber = function (bandName) {
//     let result = `${bandNumber}. ${bandName}`;
//     bandNumber++;
//     return result; 
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };
// // option 1
// for (let i = 0; i < foods.length; i++){
//     grill(foods[i])
// }

// console.log(cookedFood)

// // option 2
// for (let singleObject of cookedFood) {
//     console.log(singleObject.cooked, singleObject.name)
// }


// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         buildMeUp = buildMeUp + " " + theWordArray[i]

//         console.log(buildMeUp)
        // // buildMeUp += `${theWordArray[i]} `   **Another option?
        //     // If the current word's place (not index) in the array
        //     is evenly divisible by 3, add an exclamation point
        //     to the end of the word and then concatenate it to
        //     `buildMeUp`.
        

        //         Otherwise, just concatenate the word itself.
        //  */


        // Print buildMeUp to the console
       
//     }

// }

// addExcitement(sentence)
// // next part More exciting

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addMoreExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++){
//             if((i + 1) % 3 === 0){
//                    buildMeUp += `${theWordArray[i]}! ` 
//                    console.log(buildMeUp)
//             }else{
//                 buildMeUp += `${theWordArray[i]} ` 
//             }
//     }
// }

// addMoreExcitement(sentence)

// Function Arguement

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray, punctuation){
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++){
//       if ((i + 1) % 3 === 0){

//         buildMeUp += `${theWordArray[i]} ${punctuation} `
//       }else{
//          buildMeUp += `${theWordArray[i]} ` 

//         console.log(buildMeUp)
//         // // buildMeUp += `${theWordArray[i]} `   **Another option?
             
//     }
//   }
// }


// addExcitement(sentence, "!");
// addExcitement(sentence, "?")



