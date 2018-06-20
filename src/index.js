const { ConsentString } = require('consent-string')
const input = document.querySelector('input[type=text]')
const output = document.querySelector('.output')

const decode =  (e) => {

    try {
        output.classList.remove('error')
        if (!input.value) {
            output.textContent = 'Nothing to decode'
        } else {
            const consent = new ConsentString(input.value.replace(/"/g, ''))
            output.textContent = JSON.stringify(consent, null, 2)
        }
    } catch (e) {
        output.textContent = e
        output.classList.add('error')
    }
}

input.addEventListener('keyup', decode)
decode()
