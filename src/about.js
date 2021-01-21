const loadAbout = () =>
{
    // main container
    const container = document.getElementById('content');
    container.innerHTML = "";

    // specific container for this tab
    const aboutContainer = document.createElement('div');
    container.appendChild(aboutContainer);
    aboutContainer.id = 'aboutContainer'

    // hours
    const hours = document.createElement('div');
    const hoursText = document.createElement('h2');
    hoursText.innerHTML = "<h1 id='hours'>OUR HOURS</h1><br>Monday: 10:00 AM to 5:00 PM<br>Tueday: 10:00 AM to 5:00 PM<br>Wednesday: 10:00 AM to 5:00 PM<br>Thursday: 10:00 AM to 5:00 PM<br>Friday: 11:00 AM to 4:00 PM<br>Saturday: Closed<br>Sunday: Closed";
    hoursText.id = 'hours';
    aboutContainer.append(hoursText);

    // image of kitchen
    const kitchentext = document.createElement('figcaption');
    kitchentext.id = "kitchentext";
    kitchentext.innerHTML = "<a href='https://unsplash.com/@michaelwb' target='_new'>@michaelwb</a>";

    const kitchenimg = document.createElement('img');
    kitchenimg.src = 'images/kitchen.jpg';
    kitchenimg.id = 'kitchenimg';

    const kitchenwrapper = document.createElement('figure');
    kitchenwrapper.appendChild(kitchentext);
    kitchenwrapper.appendChild(kitchenimg);

    aboutContainer.appendChild(kitchenwrapper);

}

export { loadAbout }