import {adventures} from '../data/data.js'

const dinoAdventure = (dino) => {
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
}

export {dinoAdventure}