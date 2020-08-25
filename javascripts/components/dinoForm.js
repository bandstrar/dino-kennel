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
        <input type="submit" class="btn btn-primary" value="Submit"></input>
      </form>`
    )
}

export { dinoForm }