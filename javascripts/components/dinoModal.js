import {dinoHealth} from './healthBar.js'

const buildModal = (dino) => {
  return `<div class="modal fade" id="dinoModal${dino.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel${dino.id}">Dino Profile</h5>
        <button type="button" class="close" id="modalClose${dino.id}" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="dinoContainer${dino.id}" class="d-flex flex-row justify-content-between">
            <div id="dinoImageContainer${dino.id}">
                <img src="${dino.imageUrl}" class="img-fluid w-75 m-1"  alt="${dino.name}">
            </div>
            <div id="dinoInfoContainer${dino.id}" class="mr-4 w-50 mb-2">
                <h3>${dino.name}</h3>
                <h6>Type: ${dino.type}</h6>
                <h6>Age: ${dino.age}</h6>
                <h6>Owner: ${dino.owner}</h6>
                    ${dinoHealth(dino)}
            </div>
        </div>
        <h4 class="text-center">Adventures</h4>
            <div class="adventure-info">
              <table class="table table-hover">
                <thead>
                  <tr class="bg-secondary">
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </h5>
        </div>
      </div>
    </div>
  </div>
</div>`
}



export { buildModal }