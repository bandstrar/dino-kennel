import { printDinoCards } from './dinoCards.js'
import { adventures } from '../data/data.js'


const dinoButtons = (dino) => {
    $(`#food${dino.id}`).on('click', () => {
        if (dino.health < 100) {
        dino.health += 10;
        printDinoCards();
        }
    })
    $(`#pet${dino.id}`).on('click', () => {
        if (dino.health < 100) {
        dino.health += 5;
        printDinoCards();
        }
    })
    $(`#adventure${dino.id}`).on('click', () => {
        const randomAdventure = Math.floor(Math.random() * Math.floor(adventures.length))
        const failOrSuccess = Math.floor(Math.random() * Math.floor(100))
        dino.adventures.push(adventures[randomAdventure].title)
        if (failOrSuccess > 50 && dino.health < 100) {
            dino.health += adventures[randomAdventure].healthHit;
        } else {
            dino.health -= 10
        }
        printDinoCards();
    })
}

export { dinoButtons }