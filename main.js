import { addADino } from './javascripts/components/addDino.js'
import { dinoCards } from './javascripts/components/dinoCards.js';
import { dinos } from './javascripts/data/data.js'

const init = () => {
addADino();
dinoCards(dinos);
}

init();