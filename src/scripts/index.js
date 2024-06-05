import 'regenerator-runtime'
import '../styles/main.css';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}