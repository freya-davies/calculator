var NumArray = [];
var numString = '';
let display = document.getElementById('display');
let isPreviousResult = false;

addValueClickListeners()

//make number, symbol and dot buttons and link to addValue function when clicked
function addValueClickListeners() {
    // var buttons = document.getElementsByClassName('button').addEventListener('click', addValue)

    // buttons.forEach(function(button) {
    //     button.addEventListener('click', addValue)
    // }
    document.addEventListener('click', addValue)
 };

 // catogorise the buttons and link them to their own functions
 function addValue() {
    let button = event.target.value

    if (button !== NaN || button === '.') {
        number(button) 
    } else 
    if (button === 'AC') {
        allClear()
    } else
    if (button === 'CE') {
        clear()
    } else
    if (button === '=') {
        calculate()
    } else {
        storeNumber(button)
    }
};

// make number (button) a function 
// it should do nothing if a dot is put into the numString - use .includes
// it should do nothing if numString has nothing in it and a 0 is entered as the first number
// else if there is a previous result then reset the numString to empty and isPreviousResult to false. 
// add button to numString and make the display value = numString. 

function number (button) {
    if (button === '.' && numString.includes('.')) {
        return
    } else 
    if (button === '0' && stringNum.length === 1 && stringNum.charAt(0) === '0') {
        return
    } else
    if (isPreviousResult === true) {
        numString = ''
        isPreviousResult = false
    } 
    numString += button
    display.value = numString;
};

// the clear function should reset the numString to empty and display.value to 0
function clear () {
    numString = ''
    display.value = '0'
};

// the all clear function should do the same as the clear but also empty the numArray
function allClear () {
    numString = ''
    display.value = '0'
    numArray = []
};

// the storeNumber function takes in the button clicked and does nothing if its an empty string
// it should SOMETHING --------- and then push the button to the array
// or it should push the numString and button to the numArray and clear the numString
function storeNumber (button) {
    
    if (numString === '' && numArray.length === 0) {
        return 
    } else 
    if (numString === '') {
        numArray.length = numArray.length - 1
        numArray.push(button)
    } else {
        numArray.push(numString)
        numArray.push(button)
        numString = ''
    }
};

// function calculate should push the numString to the numArray
// when an array contains a symbol then take the symbol and do its function (+ being adding, etc) to the current number and the next number in the array 
// if the current number is less than 0 take the current number and use Math.abs to change it into a positive version of itself and minus it from the whatever comes next in the equation
// display.value should be the current number
// numString = JSON.stringify(currentNumber) ----- this will change it into a string so the webserver can receive it.
    //DONT REALLY KNOW WHY THESE ARE AT THE BOTTOM. 
// numString = JSON.stringify(currentNumber)  -- makes numString a string
// isPreviousResult = true
// numArray = []
function calculate () {
    numArray.push(numString)
    let currentNum = Number(numArray[0])

    for (var i = 0; i < numArray.length; i++) {
      let nextNum = Number(numArray[i + 1])
      let symbol = numArray[i]
      
        if (numArray === '+') {
            currentNum += nextNum;
        } else
        if (numArray === '-') {
            currentNumber -= nextNum;
        } currentNum
        if (numArray === '*') {
            currentNum *= nextNum;
        } else
        if (numArray === '/') {
            currentNum /= nextNum;
        } else
        if (numArray === '%') {
            currentNum = (currentNum / nextNum) * 100;
        } 
    }

    if (currentNum < 0) {
        currentNum = Math.abs(currentNum) + '-';
    }

    display.value = currentNum; 
    numString = JSON.stringify(currentNum);
    isPreviousResult = true
    numArray = []
};
