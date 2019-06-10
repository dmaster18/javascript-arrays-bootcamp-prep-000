var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, chocolateBar) {
  var newChocolateBars = [chocolateBar, ...chocolateBars];
  return newChocolateBars;
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBar) {
  return [chocolateBar, ...chocolateBars];
}

function addElementToEndOfArray(chocolateBars, chocolateBar) {
  var newChocolateBars = [...chocolateBars, chocolateBar];
  return newChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolateBar) {
  return chocolateBars.push(chocolateBar);
}