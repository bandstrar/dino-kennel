import {adventures} from '../data/data.js'

const dinoAdventure = (dino) => {
    const randomAdventure = Math.floor(Math.random() * Math.floor(adventures.length))
    const failOrSuccess = Math.floor(Math.random() * Math.floor(100))
    let yayOrNay = ''
    if (dino.health < 100) {
        if (failOrSuccess > 50) {
            dino.health += adventures[randomAdventure].healthHit;
            yayOrNay = 'Succeeded at'
        } else {
            dino.health -= 10
            yayOrNay = 'Failed at'
        }
        dino.adventures.push({date: Date(), title: `${yayOrNay} ${adventures[randomAdventure].title}`});
    }
}

const showAdventure = (dino) => {
    dino.adventures.forEach((adventure) => {
        if(adventure.title.includes('Succeeded')) {
            $(`#successOrFail${dino.id}`).html(`<div class="text-success" id="successOrFail${dino.id}">${adventure.title}</div>`);
        } else {
            $(`#successOrFail${dino.id}`).html(`<div class="text-danger" id="successOrFail${dino.id}">${adventure.title}</div>`);
        }
    })
}

const modalAdventure = (dino) => {
    $("td").remove()
    dino.adventures.forEach((adventure) => {
        if(adventure.title.includes('Succeeded')) {
    $("tbody").append(
        `<tr>
          <td>${dino.adventures.indexOf(adventure) + 1}</td>
          <td>${adventure.date}</td>
          <td class="text-success">${adventure.title}</td>
        </tr>`
      )
    } else {
        $("tbody").append(
            `<tr>
              <td>${dino.adventures.indexOf(adventure) + 1}</td>
              <td>${adventure.date}</td>
              <td class="text-danger">${adventure.title}</td>
            </tr>`
          )
    }
    })
}

export {dinoAdventure, modalAdventure, showAdventure}