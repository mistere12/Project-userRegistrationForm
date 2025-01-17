// Element selection/retrieval : selecting or retrieving an HTML element from the Document Object Model (DOM) so that you can interact with it.

const formElement =document.getElementById("form");   //store the form element in a variable ,in order to access it later. 

const message=document.getElementById("message");  //store the message element in a variable ,in order to access it later easily by "message" variable. enji no betedegagami document.getElementById::

message.innerHTML = "";   // Clear the initial content

// Adding an event listener to form 

formElement.addEventListener("submit", function(event) {    //element.addEventListener(event, function)
  event.preventDefault();   //prevents the default action of the event (i.e form submission)
 console.log("Form submitted!");   //log the message to the console


// Getting the values from the form fields
  
const username = document.getElementById("name").value;   //declaring&initialize variable// const variableName = element.value
const email = document.getElementById("email").value;  //do z same for z rest inputs
const password= document.getElementById("password").value;

// Checking if all fields have values

if (username && email && password){       //if (condition) { ... } else { ... }
message.innerHTML="Registration successful!";
} 
else{
message.innerHTML="Registration unsuccessful!";
}  
});