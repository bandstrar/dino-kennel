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
            }
            dinoButtons(dino);
    })
}

const dinoCards = (dino) => {
    return `<div class="card m-3" style="width: 18rem;" id="dino${dino.id}">
    <button type="button" data-toggle="modal" data-target="#dinoModal${dino.id}" class="image-button" id="image${dino.id}">
    <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.name}"></button>
    <div class="card-body">
    <h5 class="card-title">${dino.name}</h5>
      ${dinoHealth(dino)}
      <div id="buttonContainer${dino.id}" class="d-flex flex-wrap">
        <button type="submit" id="food${dino.id}" class="w-25 mt-1 mr-4 btn-success"><i class="fas fa-utensils"></i></button>
        <button type="submit" id="pet${dino.id}" class="w-25 mt-1 ml-5 btn-warning"><i class="fas fa-hand-sparkles"></i></button>
        <button type="submit" id="adventure${dino.id}" class="w-25 mt-1 mr-4 btn-secondary"><i class="fas fa-hiking"></i></button>
        <button type="submit" id="remove${dino.id}" class="w-25 mt-1 ml-5 btn-danger"><i class="fas fa-minus-circle"></i></button>
        </div>
    </div>
  </div>`
}

export {printDinoCards}