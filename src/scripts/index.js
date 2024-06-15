import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

import { footerElemen } from './components/footer';
import { navbarElement } from './components/navbar';
import { createCardElement } from './components/card';

const footerContainer = document.querySelector('#footer');
footerContainer.innerHTML = footerElemen;

const navbarContainer = document.querySelector('#header');
navbarContainer.innerHTML = navbarElement;

const cardContainer = document.querySelector('#main-content');

async function fetchData(query = '') {
    try {
        const response = await fetch('http://localhost:5000/content');
        const contents = await response.json();

        const container = document.getElementById('main-content');
        container.innerHTML = '';

        const filteredContents = contents.filter(content =>
            content.title.toLowerCase().includes(query.toLowerCase())
        );

        filteredContents.forEach(content => {
            const cardHTML = createCardElement(content);
            const card = document.createElement('div');
            card.innerHTML = cardHTML;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => fetchData());

const searchButton = document.querySelector('.btn-search');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    fetchData(query);
});
