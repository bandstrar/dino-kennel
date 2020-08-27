import { printDinoCards } from './dinoCards.js'
import { adventures, dinos } from '../data/data.js'


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
        if (dino.health < 100) {
        if (failOrSuccess > 50) {
            dino.health += adventures[randomAdventure].healthHit;
        } else {
            dino.health -= 10
        }
    }
        printDinoCards();
    })
    $(`#remove${dino.id}`).on('click', () => {
        dinos.splice(($(`#dino${dino.id}`).index() - 1), 1);
        $(`#dino${dino.id}`).remove();
        console.log(dinos);
        printDinoCards();
    })
}

export { dinoButtons }