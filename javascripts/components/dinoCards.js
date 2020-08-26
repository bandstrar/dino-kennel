const dinoCards = (dinoArray) => {
    dinoArray.forEach((dino) => {
        $('#dinoKennel').append(
            `<div class="card" style="width: 18rem;">
            <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.name}">
            <div class="card-body">
              <h5 class="card-title">${dino.name}</h5>
            </div>
          </div>`
        )
    })
}

export {dinoCards}