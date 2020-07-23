// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// create a function with no inputs
const fibonnacci10 = () => {
    // create variables A and B starting  with  a= 0 and b = 1  and empty array
    let a = 0
    let b = 1
    let fibonnaci = [];
    // repeat the following loop 10 times
    for (let index = 0; index < 10; index++) {
        // add b to array
        fibonnaci.push(b)
        // loop through a+b and  set equal to c
        let c = a+b
        // update a to equal b, update b to equal c
        a = b
        b = c
    }
    return fibonnaci

}

console.log(fibonnacci10())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// create a function that accepts an array
const sortOddNumsOnly = (array) => {

    // loop through array using filter 
    // return the values that are only of type number and odd using mod 2
    return array.filter( value => typeof value === "number" && (value % 2 == 1 || value % 2 == -1)).sort((a, b) => a - b) // return array sorted

}
 console.log(sortOddNumsOnly(fullArr1))
 console.log(sortOddNumsOnly(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// create a function that accepts a string
const midLetters = (string) => {
    // if the string is even
    if (string.length % 2 === 0) {
        // return the middle 2 letters
        return string.charAt((string.length)/2 - 1) + string.charAt((string.length)/2) 
 
    } else {
        // else if the string is odd, find the middle letter using floor
        // return the middle letter
        return  string.charAt(Math.floor(string.length/2))
    }
}

console.log(midLetters(middleLetters1))
console.log(midLetters(middleLetters2))


// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    constructor(radius){
        this.radius = radius
    }
    area() {
        return 4 * Math.PI* this.radius ** 2
    }
}

//create 3 new spheere objects with radius 1, 2, and 3
 var sphere1 = new Sphere(1)
 var sphere2 = new Sphere(2)
 var sphere3 = new Sphere(3)

 // call the area method on each of the objects
 console.log(sphere1.area())
 console.log(sphere2.area())
 console.log(sphere3.area())


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


const accumulatingSum = (array) => {
    //create a new array to store values
    let newArray = [];
    // initialize first value to be pushed
    let value = array[0]
    // repeat the following loop as many times as there are items in the array
    for (let i = 0; i < array.length; i++) {
        // add the value to the new array
        newArray.push(value)
        // update value by adding orignal value plus the next item in the array
        value = value + array[i+1]
    }
    return newArray

}

console.log(accumulatingSum(numbersToAdd1))
console.log(accumulatingSum(numbersToAdd2))
console.log(accumulatingSum(numbersToAdd3))