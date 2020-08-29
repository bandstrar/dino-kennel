import { addADino } from './javascripts/components/addDino.js'
import { printDinoCards } from './javascripts/components/dinoCards.js';
import { dyingDinos } from './javascripts/components/decrement.js'

const init = () => {
addADino();
printDinoCards();
dyingDinos();
}

init();