const dinoHealth = (dino) => {
    let domString = '';
    if (dino.health > 30) {
        domString += `<div id="progressContainer${dino.id}" class="progress">
        <div id="progress${dino.id}" class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}%</div>
      </div>`
    } else if (dino.health <= 30 && dino.health > 0) {
        domString += `<div id="progressContainer${dino.id}" class="progress">
        <div id="progress${dino.id}" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}%</div>
      </div>`
    } else {
        domString += '<div class="d-flex justify-content-center"><i class="fas fa-skull-crossbones"></i></div>'
    }
    return domString;
}

export { dinoHealth }