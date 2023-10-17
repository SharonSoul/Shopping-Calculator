let userInput = document.querySelector('#amount')
let message = document.createElement('p')
let message2 = document.createElement('p')

document.querySelector('body').appendChild(message)
document.querySelector('body').appendChild(message2)


let calcBtn = document.querySelector('#calculate')


calcBtn.addEventListener('click', function(e) {
  console.log(typeof eval(userInput.value))
  if (eval(userInput.value) < 40) {
    message.textContent = `$${10 + eval(userInput.value)}`
  } else {
    message.textContent = `$${userInput.value} with FREE Shipping`
  }
})

userInput.addEventListener('keydown', function(e) {
  if (event.key === 'Enter') {
    if (eval(userInput.value) < 40) {
      message.textContent = `$${10 + eval(userInput.value)}`
    } else {
      message.textContent = `$${userInput.value} with FREE Shipping`
    }

  }
})

// userInput.addEventListener('keyup', function(e) {
//   e.preventDefault()
//   message2.textContent = userInput.value
// })