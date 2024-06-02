import 'regenerator-runtime'
import '../styles/main.css';
import '../styles/responsive.css'

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';
import { cardElement } from './components/card';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;

const cardContainer = document.querySelector('#main-content')
cardContainer.innerHTML = cardElement;