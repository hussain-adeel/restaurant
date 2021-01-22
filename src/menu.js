const loadMenu = () =>
{
    const container = document.getElementById('content');
    container.innerHTML = "";

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";

    container.appendChild(menuContainer);

    const menuitem1 = document.createElement('div');
    const menuimage1 = document.createElement('img');
    const menucap1 = document.createElement('h2');
    menuitem1.appendChild(menuimage1);
    menuitem1.appendChild(menucap1);
    menuimage1.id = "image1";
    menuimage1.classList.add('foodimage');
    menuimage1.src = "images/sandwich.jpg";
    menucap1.innerHTML = "The Sandwhich<br><a class='authlink' target='_new' href='https://unsplash.com/@asnimansari'>@asnimansari</a>";
    menucap1.id = "menucap1";
    menuitem1.id = "menu1";
    menuitem1.classList.add('menudiv')
    menuContainer.appendChild(menuitem1);

    const menuitem2 = document.createElement('div');
    const menuimage2 = document.createElement('img');
    const menucap2 = document.createElement('h2');
    menuitem2.appendChild(menuimage2);
    menuitem2.appendChild(menucap2);
    menuimage2.id = "image2";
    menuimage2.classList.add('foodimage');
    menuimage2.src = "images/pasta.jpg";
    menucap2.innerHTML = "The Pasta<br><a class='authlink' target='_new' href='https://unsplash.com/@pixzolo'>@pixzolo</a>";
    menucap2.id = "menucap2";
    menuitem2.id = "menu2";
    menuitem2.classList.add('menudiv')
    menuContainer.appendChild(menuitem2);
    
    const menuitem3 = document.createElement('div');
    const menuimage3 = document.createElement('img');
    const menucap3 = document.createElement('h2');
    menuitem3.appendChild(menuimage3);
    menuitem3.appendChild(menucap3);
    menuimage3.id = "image3";
    menuimage3.classList.add('foodimage');
    menuimage3.src = "images/cake.jpg";
    menucap3.innerHTML = "The Cake<br><a class='authlink' target='_new' href='https://unsplash.com/@davidholifield'>@davidholifield</a>";
    menucap3.id = "menucap3";
    menuitem3.id = "menu3";
    menuitem3.classList.add('menudiv')
    menuContainer.appendChild(menuitem3);

}

export { loadMenu }