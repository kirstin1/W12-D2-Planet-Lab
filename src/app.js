const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetMenuView = require('./views/planet_menu_view');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  //we need to get hold of the planet menu and make it a DOM object

  const planetMenuView = new PlanetMenuView();
  planetMenuView.bindEvents();

});
