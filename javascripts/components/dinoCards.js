import { dinos } from '../data/data.js'

const printDinoCards = () => {
    dinos.forEach((dino) => {
        if (dino.health > 30) {
            $(`#dino${dino.id}`).remove();
        $('#dinoKennel').append(
            dinoCards(dino)
        )
        $(`#progress${dino.id}`).addClass('bg-success')
        } else if (dino.health > 0 && dino.health <= 30) {
            $(`#dino${dino.id}`).remove();
           $('#dinoHospital').append(
            dinoCards(dino)
           ) 
           $(`#progress${dino.id}`).addClass('bg-danger')
        } else {
            $(`#dino${dino.id}`).remove();
            $('#dinoGraveyard').append(
                dinoCards(dino)
            )
            $(`#progressContainer${dino.id}`).replaceWith('<i class="fas fa-skull-crossbones"></i>')
            }
            dinoFood(dino);
    })
}

const dinoFood = (dino) => {
    $(`#food${dino.id}`).on('click', () => {
        if (dino.health < 100) {
        dino.health += 10;
        printDinoCards();
        }
    })
}

const dinoCards = (dino) => {
    return `<div class="card" style="width: 18rem;" id="dino${dino.id}">
    <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.name}">
    <div class="card-body">
      <h5 class="card-title">${dino.name}</h5>
      <div id="progressContainer${dino.id}" class="progress">
        <div id="progress${dino.id}" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}%</div>
      </div>
        <button type="submit" id="food${dino.id}"><i class="fas fa-utensils"></i></button>
    </div>
  </div>`
}

export {printDinoCards}