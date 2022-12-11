function evenOrOdd() {
  var first = parseInt(document.getElementById("itemOne").value);
  var second = parseInt(document.getElementById("itemTwo").value);
  var third = parseInt(document.getElementById("itemThree").value);
  var output = document.getElementById("result");

  if (first > second) {
    if (first > third) {
      output.value = "First number is big";
    } else {
      output.value = "Third number is big";
    }
  } else {
    if (second > third) {
      output.value = "second number is big";
    } else {
      output.value = "Third number is big";
    }
  }
}
