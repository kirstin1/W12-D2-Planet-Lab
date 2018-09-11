const PubSub = require('../helpers/pub_sub.js');

const SelectedPlanet = function(container){
    this.container = container;
};

SelectedPlanet.prototype.bindEvents = function(){
    PubSub.subscribe('SolarSystem:ChosenPlanet', (event) => {
        const chosenPlanet = event.detail;
        this.render(chosenPlanet);
    })
};

SelectedPlanet.prototype.render = function(chosenPlanet){
    const chosenPlanetInfo = document.createElement('p');
    chosenPlanetInfo.textContent = `
        Name: ${chosenPlanet.name}
        Orbit: ${chosenPlanet.orbit}
        Day: ${chosenPlanet.day}`;
//         chosenPlanet.surfaceArea
//         chosenPlanet.volume
//         chosenPlanet.gravity
//         chosenPlanet.moons
//         chosenPlanet.image
    this.container.innerHTML = "";
    this.container.appendChild(chosenPlanetInfo);
};

module.exports = SelectedPlanet;