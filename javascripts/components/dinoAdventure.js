import {adventures} from '../data/data.js'

const dinoAdventure = (dino) => {
    const randomAdventure = Math.floor(Math.random() * Math.floor(adventures.length))
    const failOrSuccess = Math.floor(Math.random() * Math.floor(100))
    if (dino.health < 100) {
    dino.adventures.push({date: Date(), title: adventures[randomAdventure].title})
        if (failOrSuccess > 50) {
            dino.health += adventures[randomAdventure].healthHit;
        } else {
            dino.health -= 10
        }
    }
}

const modalAdventure = (dino) => {
    $("td").remove()
    dino.adventures.forEach((adventure) => {
    $("tbody").append(
        `<tr>
          <td>${dino.adventures.indexOf(adventure) + 1}</td>
          <td>${adventure.date}</td>
          <td>${adventure.title}</td>
        </tr>`
      )
    })
}

export {dinoAdventure, modalAdventure}