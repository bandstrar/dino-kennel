import { dinos } from '../data/data.js'

const printDinoCards = () => {
    dinos.forEach((dino) => {
        if (dino.health > 30) {
        $('#dinoKennel').append(
            dinoCards(dino)
        )
        } else if (dino.health > 0 && dino.health <= 30) {
           $('#dinoHospital').append(
            dinoCards(dino)
           ) 
        } else {
            $('#dinoGraveyard').append(
                dinoCards(dino)
            )
            }
    })
}

const printNewDino = () => {
    dinos.forEach((dino, i) => {
        if ((dinos.length - 1) === i) {
            $('#dinoKennel').append(
                dinoCards(dino)
            )
        }
    })
}

const dinoCards = (dino) => {
    return `<div class="card" style="width: 18rem;">
    <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.name}">
    <div class="card-body">
      <h5 class="card-title">${dino.name}</h5>
    </div>
  </div>`
}

export {printDinoCards, printNewDino}