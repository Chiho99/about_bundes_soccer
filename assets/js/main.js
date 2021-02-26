function showMenu(){
  document.getElementById("header_right").style.display ="flex";
}

function hideMenu(){
  document.getElementById("header_right").style.display ="none";
}

let selected = document.getElementsByClassName("scroll_selected");
// console.log(a);

let sc1 = document.getElementById("scroller_1");
let sc2 = document.getElementById("scroller_2");
let sc3 = document.getElementById("scroller_3");
let sc4 = document.getElementById("scroller_4");
let sc5 = document.getElementById("scroller_5");
let sc6 = document.getElementById("scroller_6");
let sc7 = document.getElementById("scroller_7");
let sc8 = document.getElementById("scroller_8");
let sc9 = document.getElementById("scroller_9");
console.log(selected);

function scrollToRight(){
  sc1.scrollLeft += 20;
};
