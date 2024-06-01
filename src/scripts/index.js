import 'regenerator-runtime'
import '../styles/main.css';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;
