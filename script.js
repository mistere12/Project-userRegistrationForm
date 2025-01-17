// Element selection/retrieval : selecting or retrieving an HTML element from the Document Object Model (DOM) so that you can interact with it.
document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById("form"); // Store the form element in a variable

  formElement.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default action of the event (i.e form submission)
      console.log("Form submitted!"); // Log the message to the console

      // Getting the values from the form fields
      const username = document.getElementById("name").value; // Declare and initialize variable
      const email = document.getElementById("email").value; // Do the same for the rest inputs
      const password = document.getElementById("password").value;

      // Create a user object to store the user details
      const user = {
          username: username,
          email: email,
          password: password
      };

      // Add the user to the display
      addUserToList(user);

      // Show success alert
      alert("Registration successful!");

      // Clear form input
      document.getElementById('form').reset();
  });

  function addUserToList(user) {
      const usersListOl = document.getElementById('usersListOl'); // Retrieve the ordered list container

      const listItem = document.createElement('li'); // Create a list item for numbering

      // Combine user details in one paragraph
      listItem.innerHTML = `<strong>Name:</strong> ${user.username}, <strong>Email:</strong> ${user.email}`; // Format the content

      usersListOl.appendChild(listItem); // Append the list item to the ordered list
  }
});
