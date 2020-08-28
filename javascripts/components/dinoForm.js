import { dinos } from '../data/data.js'
import { printDinoCards } from './dinoCards.js'

const dinoSubmit = () => {
    $('#dinoFormSubmit').on('click', () => {
        dinos.push({id: `dino${dinos.length + 1}`, name: $('#dinoFormName').val(), type: $('#dinoFormType').val(), age: $('#dinoFormAge').val(), owner: $('#dinoFormOwner').val(), 
        adventures: [], health: 75, imageUrl: $('#dinoFormImage').val()})
        printDinoCards();
        $('#dinoForm').empty();
    })
}

const dinoForm = () => {
    $('#dinoForm').html(
        `<form>
        <div class="form-group">
          <label for="dinoFormName">Name</label>
          <input type="text" class="form-control" id="dinoFormName">
          <label for="dinoFormOwner">Owner</label>
          <input type="text" class="form-control" id="dinoFormOwner">
        </div>
        <div class="form-group">
          <label for="dinoFormAge">Age</label>
          <input type="text" class="form-control" id="dinoFormAge">
          <label for="dinoFormImage">Image</label>
          <input type="text" class="form-control" id="dinoFormImage">
        </div>
        <div class="form-group">
          <label for="dinoFormType">Type</label>
          <input type="text" class="form-control" id="dinoFormType">
        </div>
        <input type="button" class="btn btn-primary" id="dinoFormSubmit" value="Submit"></input>
      </form>`
    )
    dinoSubmit();
}

export { dinoForm }