import { loadMain, test } from './mainContent';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';

loadMain();
loadHome();

document.getElementById('home').addEventListener('click', loadHome);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('about').addEventListener('click', loadAbout);