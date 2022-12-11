function evenOrOdd() {
  var first = document.getElementById("itemOne").value;
  var second = document.getElementById("itemTwo").value;
  var third = document.getElementById("itemThree").value;
  var output = document.getElementById("result");

  if (first > second && first > third) {
    output.value = "First number is big";
  } else if (second > first && second > third) {
    output.value = "Second number is big";
  } else {
    output.value = "Third number is big";
  }
}
