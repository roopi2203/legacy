import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import jsonData from '../public/data/DATA.json';

const renderRestaurants = (restaurants) => {
  return restaurants.map((restaurant) => `
    <div class="list_item">
      <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
      <div class="city">${restaurant.city}</div>
      <div class="list_item_content">
        <p class="list_item_rating">
          Rating : 
          <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
        </p>
        <h1 class="list_item_title"><a href="#">${restaurant.name}</a></h1>
        <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
      </div>
    </div>
  `).join('');
};

const dataList = renderRestaurants(jsonData.restaurants);
document.querySelector('#tes').innerHTML = dataList;

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

const toggleDrawer = () => {
  drawer.classList.toggle('open');
};

menu.addEventListener('click', (event) => {
  toggleDrawer();
  event.stopPropagation();
});

document.addEventListener('click', () => {
  drawer.classList.remove('open');
});
