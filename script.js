/*
  1. Create a new Github project named js102.
  2. Create a ~/workspace/js102 directory on your host machine.
  3. Initialize the ~/workspace/js102 directory as a git project and attach it to your js102 Github project.
  4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you 
  passed in that are larger than 25.
  6. Create a simple HTML form that has one input box and one button.
  7. Attach an event handler to the button click.
  8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers 
  (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that sorts the array.
  12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).
  13. Give each <div> a class of "number".
  14. Write a CSS class that changes the font color of the even elements to red.
  15. Write a CSS class that changes the background color of the odd elements to azure.
  
  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/

function sortArray(array) {
  return array.sort();
  console.log("sortArray");
}

function findBigNumbers(array) {
  var bigNums = [];
  for (var i = 0; i < array.length; i ++) {
    if (array[i] > 25) {
      bigNums.push(array[i]);
    }
  }
  return bigNums;
  console.log("findBigNumbers");
}

var newArray = [];
var bigNumArray = [];

function grabInput() {
  newArray = $("#input").val().split(",");

  for (var i =0; i < newArray.length; i++) {
    newArray[i] = parseInt(newArray[i]);
  }
  //for (var i = 0; i < newArray.length; i++) {
    //if (newArray[i] === "NaN") {
      //alert("Please follow directions.\n Only enter a list of numbers seperated by commas.")
      //$("#input").val("");
      //break;
    }
  }
  $("#input").val("");
  console.log("newArray is " + newArray);
  return newArray;
}

var output = "";

function numberOlympics() {
  bigNumArray = findBigNumbers(newArray); 
  bigNumArray = sortArray(bigNumArray);
  placeOutput();
  return bigNumArray;
}

function placeOutput() {
  for (var i = 0; i < bigNumArray.length; i++) {
    output += "<div class='number'>" + bigNumArray[i] + "</div>";
  }
  $("#output").html(output);

}

$(document).ready(function() {

$("#submit").click(grabInput);
$("#tricks").click(numberOlympics);

});
























