// Get all buttons as a NodeList
var btns = document.querySelectorAll('div');
console.log(btns);

// Convert buttons NodeList to an array
var btnsArr = Array.prototype.slice.call(btns);
console.log(btnsArr);