const Planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
    PubSub.subscribe('PlanetMenuView:SelectedPlanet', (event) => {
        const chosenPlanet = event.detail;
        for (planet of this.planets) {
            if (chosenPlanet === planet.name) {
                PubSub.publish('SolarSystem:ChosenPlanet', planet);
            }
        }

    })
};


module.exports = SolarSystem;

