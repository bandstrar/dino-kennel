import { printDinoCards } from './dinoCards.js'
import { dinos } from '../data/data.js'
import { buildModal } from './dinoModal.js'
import { dinoAdventure, modalAdventure, showAdventure } from './dinoAdventure.js'


const dinoButtons = (dino) => {
    $(`#image${dino.id}`).on('click', () => {
        $('#dinoModal').empty();
        $('#dinoModal').append(
        buildModal(dino)
        )
        modalAdventure(dino)
    })

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
        dinoAdventure(dino)
        printDinoCards();
        $(`#successOrFail${dino.id}`).empty();
        showAdventure(dino)
    })

    $(`#remove${dino.id}`).on('click', () => {
        const findId = dinos.indexOf(dino)
        dinos.splice(findId, 1);
        $(`#dino${dino.id}`).remove();
        printDinoCards();
    })
}

export { dinoButtons }