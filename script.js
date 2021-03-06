// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

  function addName() {
    console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Young Dog';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings


  let li = document.createElement('li');
  li.textContent = "Treats" ;

  let li2 = document.createElement('li');
  li2.textContent = "Walks";

  let li3 = document.createElement('li');
  li3.textContent= "Tennis Balls";


  const favthings = document.querySelector('#favthings');
    favthings.appendChild(li);
    favthings.appendChild(li2);
    favthings.appendChild(li3);
}


  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement


function replaceImage() {
  console.log('Called replaceImage()');

  // Change the puppy picture to a picture of your choosing

let newImage = document.querySelector('#picture');
 newImage.src = "https://images.ctfassets.net/440y9b545yd9/2aN6iCO7gd3qTpA6Rhoy00/8ce2220559c68b9c8b2d67c001f0893b/most-common-puppy-incidents-hero850.jpg";
 newImage.height = "200";
  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  let codeImage = document.createElement('img');
  codeImage.src = "https://sayingimages.com/wp-content/uploads/can-i-puppy-memes-1024x780.jpg";
  codeImage.height= "300";
  codeImage.width = "400";

  const sweetmeme = document.querySelector('#codestatus');
  sweetmeme.replaceChild(codeImage, sweetmeme.childNodes[0]);

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicked
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.

  //let submitInfo = document.querySelector('#information-form');
  //let infoSubmitted = "";
  //let i;
  //for (i=0; i < submitInfo.length; i++){
   // infoSubmitted = infoSubmitted + submitInfo.elements[i].value + "<br>";
  //}

  console.log('Form submitted');

   let fname = document.querySelector("#fname").value;
   console.log(fname);
   document.querySelector("#firstname").innerHTML = fname;

  document.querySelector("#firstname").innerHTML = document.querySelector("#fname").value;
  document.querySelector("#lastname").innerHTML = document.querySelector("#lname").value;
  document.querySelector("#chosencar").innerHTML = document.querySelector("#cars").value;
  document.querySelector('input[name="icecream]:checked').value;
  document.querySelector("#").innerHTML = document.querySelector("#cars").checked;


  let isHuman = document.querySelector("#humancheck").checked;
  let isCoder = document.querySelector("#codercheck").checked;

    if (isHuman){
      document.querySelector("#checks").append("This person is a human");
    }

    if (isCoder){
      document.querySelector("#checks").append("This person is a coder");
    }

//console.log(document.querySelector("#cars").value);





  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});
function getValue(){


}

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#________');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});

let makeBlueButton = document.querySelector('#________');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addeventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

 document.querySelector(".form").addEventListener("submit",function(event){
   event.preventDefault();
   let todo = document.querySelector("#todo").value;
   console.log(todo);

   let li = document.createElement("li");
   li.innerHTML=todo;

   document.querySelector("#todos").appendChild(li)
 })
// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

 let startTime = Date.now();

 setInterval(function() {
   let currentTime = Date.now();
   let diffInSeconds = (currentTime - startTime) / 1000;

   let secondsOutput = document.querySelector("#seconds");

   secondsOutput.innerText = diffInSeconds.toFixed(1);
 }, 20);

// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
