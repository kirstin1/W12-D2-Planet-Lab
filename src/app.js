const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetMenuView = require('./views/planet_menu_view');
const SelectedPlanet = require('./views/selected_planet.js');

document.addEventListener('DOMContentLoaded', () => {

  //The MENUVIEW gets the list of planets, chooses one by clicking on it and publishes the planet:id on it's channel
  const planetMenuView = new PlanetMenuView();
  planetMenuView.bindEvents();

  //The MODEL subscribes to the "view's channel" and when it picks up the planet that was clicked on, it matches it with the correct planet object (by name) and publishes this object on a new channel
  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();

  // The CHOSENPLANETVIEW  subscribes to the model's channel that publishes a planet object. When it gets the object, we get it's detail.
    // Then we run a render function to output the data to HTML.
  const planetInfo = document.querySelector('.planet-details');
  const selectedPlanet = new SelectedPlanet(planetInfo);
  selectedPlanet.bindEvents();

});
