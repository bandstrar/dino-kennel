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
        dino.adventures.push({date: Date(), title: `${yayOrNay} ${adventures[randomAdventure].title}`})
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