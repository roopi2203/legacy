import 'regenerator-runtime'
import '../styles/main.css';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;

// document.getElementById('upload-button').addEventListener('click', function() {
//     document.getElementById('file-upload').click();
// });

// document.getElementById('file-upload').addEventListener('change', function() {
//     const file = this.files[0];
//     if (file) {
//         alert(`Selected file: ${file.name}`);
//     }
// });
