window.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('input[name]:not([type="checkbox"])')
    const formInputsArray = Array.from(formInputs)
    const passwordInput = document.querySelector('input[name="password"]')
    const form = document.querySelector('form')
    const EIGHTEEN_YEARS = 18
  
    const validateName = (name) => {
      const regExp = new RegExp(/^[a-zA-Z\s]+$/)
      return name.length > 0 && regExp.test(name)
    }
    const validateUsername = (username) => {
      const regExp = new RegExp(/^[a-zA-Z0-9]+$/)
      return username.length > 0 && regExp.test(username)
    }
    const validatePassword = (confirmPassword, password = passwordInput.value) => password === confirmPassword
    const validateBirthday = (birthday) => {
      const today = new Date()
      const eighteenYearsAgo = new Date(today.getFullYear() - EIGHTEEN_YEARS, today.getMonth(), today.getDate())
      const birthdayDate = new Date(birthday)
      return birthdayDate <= eighteenYearsAgo
    }
  
    const VALIDATION_FUNCTIONS = {
      'first-name': validateName,
      'last-name': validateName,
      username: validateUsername,
      'confirm-password': validatePassword,
      birthday: validateBirthday,
      defaultValidation: (_) => true
    }
  
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        const { name, value } = input
        const validationFunction = VALIDATION_FUNCTIONS[name] ?? VALIDATION_FUNCTIONS.defaultValidation
        const isValid = validationFunction(value)
        input.classList.toggle('invalid', !isValid)
  
        const errorMessage = input.parentElement.querySelector('.error-message')
        errorMessage.classList.toggle('hidden', isValid)
  
        const submitButton = form.querySelector('button')
        const someInputIsInvalid = formInputsArray.some((input) => input.classList.contains('invalid'))
        submitButton.disabled = someInputIsInvalid || !form.checkValidity()
      })
    })
  
  
    form.addEventListener('submit', (event) => {
      event.preventDefault()
  
      const formData = new FormData(form)
  
      const firstName = formData.get('first-name')
      const lastName = formData.get('last-name')
      const username = formData.get('username')
      const password = formData.get('password')
      const birthday = formData.get('birthday')
      const newsletter = formData.get('newsletter') === 'on'
  
      const newUser = [
        firstName,
        lastName,
        password,
        username,
        birthday,
        newsletter
      ]
  
      console.log(newUser)
    })
  })
  