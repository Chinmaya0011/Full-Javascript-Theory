/*
  Local Storage:
  1. Persistent data storage in the browser.
  2. setItem: Stores data as key-value pairs.
  3. Only strings can be stored.
  4. getItem: Retrieves data based on key.
  5. Other Methods: localStorage.clear(), localStorage.removeItem().
  6. Do not store sensitive information.

  Example Usage:

  // Storing data
  localStorage.setItem("username", "John");

  // Retrieving data
  let storedUsername = localStorage.getItem("username");

  // Clearing all data in localStorage
  localStorage.clear();

  // Removing a specific item
  localStorage.removeItem("username");
*/

// Accessing the localStorage object
console.log(localStorage);
