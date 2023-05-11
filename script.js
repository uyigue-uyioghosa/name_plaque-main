// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');



// Refactoring with Arrow Function
let countLetters = (some_data) => {
  const optName = some_data.replace(/\s/g, '');
  const price = optName.length * 5 // price of each non-space letter
  userLeterPreview.textContent = some_data;
  userPricePreview.textContent = '$' + price;
}

let buyNow = () => {
 const inputValue = userInput.value.trim();
const defaultText = "precious";
  
 if (!inputValue) {
  wrnBtn.textContent=("Please input letters before clicking Buy now.");
    return false; //this prevent the form from submiting
  }

  // Check if the input field is equal to the default text

  if (inputValue === defaultText) {
    // Print a message
    wrnBtn.textContent=("Please enter a unique text. this is the default text");
    return false;
  } else if (inputValue.length > 15) {
    wrnBtn.textContent=("Sorry, we have 15 letters left in stock, and you have exceeded the limit.");
    return false;
  } else {
    const price = inputValue.replace(/\s/g, '').length * 5; // fixed variable name and moved the price calculation here

    wrnBtn.textContent = (`Successful your price is $${price} `);
    wrnBtn.style.color = '#16FF00';
return true;
  }
  }
    
userInput.oninput = (e) => {
  countLetters(e.target.value)
}

// Get the input field and default text





/*checking if user input is empty
const checkInput = () => {
  const inputField = document.getElementsByClassName("field-input"); // replace "input-field" with the actual ID of your input field
  if (inputField.value === " ") {
    console.log("Please input letters.");
  }
}

checkInput()



const inputEntered = () => {
  const inputField = document.getElementsByClassName("field-input"); // replace "input-field" with the actual ID of your input field
  const defaultText = "YOUR NAME"; // replace with your actual default text

  if (inputField.value === defaultText) {
    console.log("Please enter your custom letters.");
  }
}

inputEntered()*/






