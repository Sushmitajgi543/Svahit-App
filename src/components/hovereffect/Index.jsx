// import Cursor from './Cursor';
import {preloader} from './Preloader';
// import LocomotiveScroll from 'locomotive-scroll';
import Menu from './Menu';

 
export const Hover=()=>{
// menu (<nav> element)
const menuEl = document.querySelector('.menu');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    // const scroll = new LocomotiveScroll({el: menuEl, smooth: true});

    // // initialize custom cursor
    // const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});
}
