import { dinoForm } from './dinoForm.js'

const addADino = () => {
    $('#dinoForm').hide();
    $('#addDinoBtn').on('click', () => {
        dinoForm();
        $('#dinoForm').toggle();
})
}

export { addADino }