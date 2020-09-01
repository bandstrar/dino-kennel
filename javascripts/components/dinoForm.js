import { dinos } from '../data/data.js'
import { printDinoCards } from './dinoCards.js'

const dinoSubmit = () => {
    $('#dinoFormSubmit').on('click', () => {
      if ($('#dinoFormName').val() === '' || $('#dinoFormOwner').val() === '' || $('#dinoFormAge').val() === ''
      || $('#dinoFormImage').val() === '' || $('#dinoFormType').val() === '') {
        $('#formWarning').empty()
        $('#formWarning').append('<p class="text-danger">Please completely fill out the form</p>')
      } else {
        dinos.push({id: `dino${dinos.length + 1}`, name: $('#dinoFormName').val(), type: $('#dinoFormType').val(), age: $('#dinoFormAge').val(), owner: $('#dinoFormOwner').val(), 
        adventures: [], health: 75, imageUrl: $('#dinoFormImage').val()})
        printDinoCards();
        $('#dinoForm').empty();
      }
    })
}

const dinoForm = () => {
    $('#dinoForm').html(
        `<form>
        <div class="d-flex flex-flow justify-content-around form-group">
          <label class="mt-3" for="dinoFormName">Name</label>
          <input type="text" class="m-3 form-control" id="dinoFormName">
          <label class="mt-3" for="dinoFormOwner">Owner</label>
          <input type="text" class="m-3 form-control" id="dinoFormOwner">
        </div>
        <div class="d-flex flex-flow justify-content-around form-group">
          <label class="mt-3" for="dinoFormAge">Age</label>
          <input type="text" class="m-3 form-control" id="dinoFormAge">
          <label class="mt-3" for="dinoFormImage">Image</label>
          <input type="text" class="m-3 form-control" id="dinoFormImage">
        </div>
        <div class="d-flex flex-flow justify-content-around w-50 form-group">
          <label class="mt-3" for="dinoFormType">Type</label>
          <input type="text" class="m-3 form-control" id="dinoFormType">
        </div>
        <input type="button" class="btn btn-primary" id="dinoFormSubmit" value="Submit"></input>
        <div id="formWarning"></div>
      </form>`
    )
    dinoSubmit();
}

export { dinoForm }