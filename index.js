//As a developer I want...

//- a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//- an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//- an alert saying "Emoji Submitted!" whenever an emoji is submitted
//- the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//- an emoji I click on turns into '🤪'

//1. Select the elements that I know I will manipulate using JS in some way

const addEmojiArea = document.querySelector('#add-emoji-area')
//const addButton = document.getElementById('add-button')
const emojiBank = document.getElementById('emoji-bank')

//2. Determine which of these elements needs an event listener, and add it
//In order to determine which elements need an event listener, mock-use the application in the browser and ask yourself which elements are waiting for user interaction


function addEmojiAreaButtonClick(e){
  if (e.target.id == "add-button"){
    addEmojiArea.innerHTML = `
      <form id="add-emoji-form">
        <input type="text" id="add-emoji-input"/>
        <input type="submit" value="Add That Emoji!" />
      </form>
    `
  }
}

function addEmojiAreaFormSubmit(e){
  e.preventDefault()
  let input = addEmojiArea.querySelector('#add-emoji-input')
  emojiBank.innerHTML += `<li>${input.value}</li>`
  addEmojiArea.innerHTML = `<button id="add-button">Add Emoji</button>`
  alert('Emoji successfully added!')
}

addEmojiArea.addEventListener('click', addEmojiAreaButtonClick)
addEmojiArea.addEventListener('submit', addEmojiAreaFormSubmit)


//Whenever a method requires a function as an argument to complete a logic that will be carried out in the future, we call that argument a callback function
//Methods that require callbacks can accept a function reference OR an in-line function definition
