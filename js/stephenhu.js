/* stephenhu.js */

function toggleView(a, b) {

  var show = document.getElementById(a);
  var hide = document.getElementById(b);

  show.setAttribute("class", "d-block");
  hide.setAttribute("class", "d-none");

} // toggleView


function pageInit() {

  window.onload = function () {

    console.log(window.location);
    console.log(window.location.pathname);

    var main = document.getElementById("main");
    var page = document.getElementById("page");

    if(window.location.pathname.includes("#")) {
      toggleView("page", "main");
    } else {
      toggleView("main", "page");
    }

    //window.location = "index.html"

  }

} // pageInit
