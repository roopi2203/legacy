import '../components/storyPage.js';

const main = () => {
  const wrapper1 = document.querySelector('.wrapper-1');
  const indicators1 = [...document.querySelectorAll('.indicators-1 button')];

  let currentSlideshow = 0; // Default 0

  indicators1.forEach((item, i) => {
    //untuk dapat di tekan pada button slide tampilan olahan kopi pada slideshow
    item.addEventListener('click', () => {
      indicators1[currentSlideshow].classList.remove('active');
      wrapper1.style.marginLeft = `-${100 * i}%`;
      item.classList.add('active');
      currentSlideshow = i;
    });
  });
};

export default main;
