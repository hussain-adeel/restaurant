const loadMain = () =>
{
    // main div
    const container = document.getElementById('content');

    // logo
    const bannerlogo = document.createElement('img');
    bannerlogo.src = "images/logo.svg";
    bannerlogo.classList.add('reslogo');

    // menu options
    const homebtn = document.createElement('button');
    const menubtn = document.createElement('button');
    const aboutbtn = document.createElement('button');



    homebtn.classList.add('menubtn');
    menubtn.classList.add('menubtn');
    aboutbtn.classList.add('menubtn');
    aboutbtn.value = "ABOUT";
    homebtn.value = "HOME";
    menubtn.value = "MENU";
    aboutbtn.id = "about";
    homebtn.id = "home";
    menubtn.id = "menu";
    homebtn.textContent = "HOME";
    menubtn.textContent = "MENU";
    aboutbtn.textContent = "ABOUT";

    const menuoptions = document.createElement('div');
    menuoptions.appendChild(homebtn);
    menuoptions.appendChild(menubtn);
    menuoptions.appendChild(aboutbtn);


    // header
    const header = document.createElement('header');
    header.id = "head";
    header.classList.add("head");
    container.before(header);
    header.appendChild(bannerlogo);
    header.appendChild(menuoptions);
}

export { loadMain }