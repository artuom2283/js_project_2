// const  array = [1, 2, 3, 4, 44]
// const arrayStrings = ['a', 'b', 'c', null, 112]

// const array = new Array(1, 2 ,3 ,4 ,5 ,6)

// console.log(array[1])
// console.log(array[array.length - 1])
// array[0] = 'Privet'
// console.log(array)
// array[array.length] = 'becon'
// console.log(array)
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['убить негра', 'почиститиь зубы']

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes))
//   }
  
// }

// render()

// createBtn.onclick = function() {
//   if (inputElement.value.length  === 0) {
//     return
//   }
//   else {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//   }
//   // listElement.innerHTML = 
//   inputElement.value = ''
// }

// function getNoteTemplate(title) {
//   return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${title}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>
//   `;
// }

// object

const person = {
  firstName: 'ara',
  lastName: 'bara',
  birthYear: 2004,
  color: 'white',
  gay: false,
  languages: ['ru', 'ukr', 'en'],
  getFullName: function() {
    console.log(person.firstName + ' ' + this.lastName)
  }
}
console.log(person.birthYear)
console.log(person['languages'])
const key = 'gay'
console.log(person[key])
person.gay = true
console.log(person['gay'])
person.getFullName()

const notes = [
  {
    title: 'дать негру попить',
    completed: true,
  },
  {
    title: 'убить негра',
    completed: true,
  },
]

function render() {
  listElement.innerHTML = ''
  if (notes.length === 0){
    listElement.innerHTML = '<p>Нет элементов</p>'
  }

  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
  }
}
render()

createBtn.onclick = function() {
  if (inputElement.value.length  === 0) {
    return
  }
  else {
    const newNote = {
      title: inputElement.value,
      completed: false,
    }
    notes.push(newNote)
    render()
  }
  // listElement.innerHTML = 
  inputElement.value = ''
}

listElement.onclick = function(event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
      notes.splice(index, 1)
    }
    render()
  }
}

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
      <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
      </span>
    </li>
  `;
}
