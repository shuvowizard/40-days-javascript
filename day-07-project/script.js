/**
 * Alert(message)
 * Display a message in a popup box.
 * Blocks the page until user clicks OK
 * Returns: undefined
*/

alert('Hello, world!');


/**
 * Confirm(message)
 * Display a message in a popup box.
 * Ask for user confirmation (OK / Cancel).
 * Returns: (Boolean) OK → true, Cancel → false
 */

confirm('Are you sure?');

let proceed = confirm('Do you want to delete this file?');
if (proceed) {
  console.log('File deleted');
} else {
  console.log('Action cancelled');
}

/**
 * Prompt(message, default)
 * Display a message in a popup box.
 * Get input from the user via a input (text) box.
 * Returns: (String) User input or null if cancelled
 */

prompt('Enter your name:');


let userName = prompt('What is your name?', 'Guest');
if (userName !== null) {
  console.log('Hello, ' + userName + '!');
} else {
  console.log('User cancelled the prompt.');
}