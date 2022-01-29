/* stephenhu.js */

const EMPTY         = "";
const FSLASH        = "/";
const MAIN_ID       = "main";
const PAGE_ID       = "page";

const TAG_CLASS     = "class";
const TAG_ID        = "id";

// this relies on bootstrap, should make this generic
const DBLOCK        = "d-block";
const DNONE         = "d-none";

const CLASS_BOX     = "box";
const CLASS_XL      = "xl";
const CLASS_BLUE    = "blue";

const XTAG_DATE     = "xdate";


var articles = new Array();


function toggleView(a, b) {

  var show = document.getElementById(a);
  var hide = document.getElementById(b);

  show.setAttribute(TAG_CLASS, DBLOCK);
  hide.setAttribute(TAG_CLASS, DNONE);

} // toggleView


function navigation() {

  var hash = new URL(document.URL).hash.substring(1);

  console.log(hash);
  if(hash === EMPTY) {
    toggleView(MAIN_ID, PAGE_ID);
  } else {
    toggleView(PAGE_ID, MAIN_ID);

    var page = document.getElementById(PAGE_ID);

    for(var i = 0; i < page.children.length; i++) {

      if(page.children[i].getAttribute(TAG_ID) === hash) {
        page.children[i].setAttribute(TAG_CLASS,
          `${DBLOCK} ${CLASS_BOX} ${CLASS_XL} ${CLASS_BLUE}`);
      } else {
        page.children[i].setAttribute(TAG_CLASS,
          `${DNONE} ${CLASS_BOX} ${CLASS_XL} ${CLASS_BLUE}`);
      }

    }

  }

} // navigation


function render() {

  window.onload = function () {

    parseArticles();

    var main = document.getElementById(MAIN_ID);
    var page = document.getElementById(PAGE_ID);

    var hash = new URL(document.URL).hash;

    if(hash === EMPTY) {
      console.log("test");
      toggleView(MAIN_ID, PAGE_ID);
    } else {
      navigation();
    }

  }

  window.addEventListener("hashchange", navigation);

} // render


function niceTime(t) {

  var d = new Date(parseInt(t, 10)*1000);

  console.log(d);

  return d.toGMTString();

} // niceTime


function parseArticles() {

  var main = document.getElementById(MAIN_ID);

  for(var i = 0; i < main.children.length; i++) {

    var t = main.children[i].getAttribute(TAG_ID);
    var x = niceTime(t);
    var o = document.getElementById(XTAG_DATE + t);

    o.innerText = x;

  }

} // parseArticles


function since() {

  const af = new Intl.RelativeTimeFormat("en", {style: "narrow"});

  var main = document.getElementById("main");

  var children = main.children;

  for(var i = 0; i < children.length; i++) {
    console.log(children[i]);
    console.log(children[i].getAttribute("id"));
    var d = new Date(parseInt(children[i].getAttribute("id"), 10)*1000);
    console.log(d);

    var n = new Date();
    console.log(n.getTime()-d.getTime());
    console.log(af.format((n.getTime() - d.getTime())/(1000*3600*24), "day"));
  }
  
} // since


