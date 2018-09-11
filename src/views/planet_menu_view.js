const PubSub = require('../helpers/pub_sub.js');

PlanetMenuView = function(){
};

PlanetMenuView.prototype.bindEvents = function(){
  const allPlanets = document.querySelectorAll('.planet-menu-item');
    for(planet of allPlanets){
        planet.addEventListener('click', (event) => {
            const planetChosen = event.target.id;
            PubSub.publish('PlanetMenuView:SelectedPlanet', planetChosen);
        });
    }
};


module.exports = PlanetMenuView;
