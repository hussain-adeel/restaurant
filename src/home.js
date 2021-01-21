const loadHome = () =>
{
    const container = document.getElementById('content');
    container.innerHTML = "";

    const homeContainer = document.createElement('div');
    homeContainer.id = "homeContent";

    container.appendChild(homeContainer);

    // main content - image
    const mainimage = document.createElement('img');
    mainimage.src = 'images/food.jpg';
    mainimage.classList.add('mainimg');
    mainimage.alt = "Breakfast Food"

    homeContainer.appendChild(mainimage);

    // main content - text
    const maintxt = document.createElement('p');
    maintxt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a id='main' href='https://unsplash.com/@brookelark' target='_new'>Image by Broke Lark</a>.";
    maintxt.classList.add('maintxt');
    homeContainer.appendChild(maintxt);
}

export { loadHome }