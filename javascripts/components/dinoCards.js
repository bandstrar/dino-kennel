import { dinos } from '../data/data.js'
import { dinoButtons } from './dinoButtons.js'
import { dinoHealth } from './healthBar.js'

const printDinoCards = () => {
    dinos.forEach((dino) => {
        if (dino.health > 30) {
            $(`#dino${dino.id}`).remove();
        $('#dinoKennel').append(
            dinoCards(dino)
        )
        } else if (dino.health > 0 && dino.health <= 30) {
            $(`#dino${dino.id}`).remove();
           $('#dinoHospital').append(
            dinoCards(dino)
           ) 
        } else {
            $(`#dino${dino.id}`).remove();
            $('#dinoGraveyard').append(
                dinoCards(dino)
            )
            $(`#food${dino.id}`).replaceWith('')
            $(`#pet${dino.id}`).replaceWith('')
            $(`#adventure${dino.id}`).replaceWith('')
            }
            dinoButtons(dino);
    })
}

const dinoCards = (dino) => {
    return `<div class="card m-3" style="width: 18rem;" id="dino${dino.id}">
    <button type="button" data-toggle="modal" data-target="#dinoModal${dino.id}" class="image-button" id="image${dino.id}">
    <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.name}"></button>
    <div class="card-body">
    <h5 class="card-title text-center">${dino.name}</h5>
      ${dinoHealth(dino)}
      <div id="buttonContainer${dino.id}" class="d-flex flex-wrap justify-content-around">
        <button type="submit" id="food${dino.id}" class="mt-4 w-50 btn-success"><i class="fas fa-utensils"></i></button>
        <button type="submit" id="pet${dino.id}" class="mt-4 w-50 btn-warning"><i class="fas fa-hand-sparkles"></i></button>
        <button type="submit" id="adventure${dino.id}" class="mt-4 w-50 btn-secondary"><i class="fas fa-hiking"></i></button>
        <button type="submit" id="remove${dino.id}" class="mt-4 w-50 btn-danger"><i class="fas fa-minus-circle"></i></button>
      </div>
      <div id="successOrFail${dino.id}"></div>
    </div>
  </div>`
}

export {printDinoCards}