import { dinoForm } from './dinoForm.js'

const addADino = () => {
    $('#addDinoBtn').on('click', () => {
        dinoForm();
})
}

export { addADino }