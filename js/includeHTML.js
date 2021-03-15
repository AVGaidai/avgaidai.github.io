function includeHTML() {

  var elem, file, xhttp;

  elem = document.getElementById("123");
  file = elem.getAttribute("w3-include-html");

      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;

}