import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/components/app-bar.js';
import '../scripts/components/footer-bar.js';
import '../scripts/components/storyPage.js';

import main from './view/main';
document.addEventListener('DOMContentLoaded', main);
