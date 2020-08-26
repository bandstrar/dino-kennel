import { dinos } from '../data/data.js'

const printDinoCards = () => {
    dinos.forEach((dino, i) => {
        if (dino.health > 30) {
        $('#dinoKennel').append(
            dinoCards(dino),
        )
        $(`#progress${dino.id}`).addClass('bg-success')
        } else if (dino.health > 0 && dino.health <= 30) {
           $('#dinoHospital').append(
            dinoCards(dino)
           ) 
           $(`#progress${dino.id}`).addClass('bg-danger')
        } else {
            $('#dinoGraveyard').append(
                dinoCards(dino)
            )
            $(`#progressContainer${dino.id}`).replaceWith('<i class="fas fa-skull-crossbones"></i>')
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
      <div id="progressContainer${dino.id}" class="progress">
  <div id="progress${dino.id}" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}%</div>
</div>
    </div>
  </div>`
}

export {printDinoCards, printNewDino}