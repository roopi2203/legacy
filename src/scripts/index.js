import 'regenerator-runtime'
import '../styles/main.css';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;

document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        const icon = item.querySelector('.plus-icon');
        
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.accordion-content').forEach(content => content.classList.remove('open'));
            document.querySelectorAll('.plus-icon').forEach(icon => icon.textContent = '+');
            content.classList.add('open');
            icon.textContent = '−';
        }
    });
});
