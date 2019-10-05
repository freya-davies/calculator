Sample solution - https://codepen.io/freeCodeCamp/pen/EPNZYW

// HTML

// create a paragraph for each of the following with ids of: title, tagline, answer. 

// class row has 19 buttons sectioned into 5 rows to look like a basic calculator. 
// rows go like this with the first one being the top:
// AE, CE, % and ÷
// 7, 8, 9, x
// 4, 5, 6, -
// 1, 2, 3, + (+ is shared over 2 rows)
// 0, . =




// CSS

// calculator should be 250px wide, 335px high with no margins.

// curve the edges of the calculator
// and give it a grey shadow using box-shadow

// The title should be centered with 10px of padding top and bottom

// the tagline should be in caps and font .7em and open

// the #answer should have a height of 40px, width of 80%
// Should have 1px solid border, 2em font. 
// needs padding around the font (R: 10px, B: 20px)
// needs inset shaddow around strings 


// buttons display in block with a width of 40px, height of 30px and border of 1px solid
// AC and CE are red the other buttons are grey
// all button text is white
// curve the buttons' border radius all sides to 80%10px
// Add 5px margin to left and right and 8px to the bottom
// add box shadow which is light around the outside and then fades back to dark towards the center (more on top side than bottom)
// Same shadow outside but but dark and it fades out more to the top of the box. 
// make an outline boarder to stop the fading from spreading too much by using  &:focus {outline: 0;}
// when the buttons are clicked (active) make the background of the button change to have more of the fading colour come up from the bottom of the button.

// make the + button span 2 rows high (65px) 




// JS

// make an array called entries

// make a variable called total which = 0

// make a variable called equation which = a string
// I dont understand the next part but I think it does this:

//make the buttons work by creating a function that uses if/else statement to determin whether the entry is the following and push it to the equation accordingly:
// * adds the button value to the disply if it is a number or a dot
// * clears the total (AC)
// * clears last entry (CE)
// * push the symbol (+, - etc) to the equation
// * make the symbols equal what they actually do (eg x is *)
// when = is clicked return "=" + equationTotal on display


// ---------NEW JS PSEUDOCODE ------------

// make number (button) a function 
// it should do nothing if a dot is put in
// it should do nothing if numString has nothing in it and a 0 is entered
// ELSE if there is a previous result then reset the numString to empty and isPreviousResult to false. 
// add button to numString and make the display value = numString. 


// the clear function should reset the numString to empty ans display.value to 0

// the all clear function should do the same as the clear but also empty the numArray

// the storeNumber function takes in the button clicked and does nothing if its an empty string
// it should SOMETHING --------- and then push the button to the array
// or it should push the numString and button to the numArray and clear the numString

// function calculate should push the numString to the numArray
// when an array contains a symbol then take the symbol and do its function (+ being adding, etc) to the current number and the next number in the array 

// if the current number is less than 0 take the current number and use Math.abs to change it into a positive version of itself and minus it from the whatever comes next in the equation

// display.value should be the current number
// numString = JSON.stringify(currentNumber) ----- this will change it into a string so the webserver can receive it.
    //DONT REALLY KNOW WHY THESE ARE AT THE BOTTOM. 
// numString = JSON.stringify(currentNumber)
// isPreviousResult = true
// numArray = []

