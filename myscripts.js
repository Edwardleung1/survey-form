const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('survey-form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    
    if (messages.length > 0) {
        e.preventDefault() //only do this if we have errors on the survey form i.e messages > 0
        errorElement.innerText = messages.join(', ') //joining each error message by a comma
    }
})