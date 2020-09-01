import {dinos} from '../data/data.js'
import {printDinoCards} from './dinoCards.js'

const decrementHealth = () => {
    dinos.forEach((dino) => {
      dino.health -= 1
    })
  }

  const dyingDinos = () => {
      setInterval(decrementHealth, 10000)
      setInterval(printDinoCards, 10000)
  }

  export {dyingDinos}