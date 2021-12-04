let contactList = [
    {
      name: "Mateo Chung",
      phone: "+1 778-213-2342",
      address: "123 Place St. Vancouver, BC",
      email: "mchung@gmail.com",
    }, 
    {
      name: "Ameera Spears",
      phone: "+1 604-234-8088",
      address: "456 Place Ave. Vancouver, BC",
      email: "aspears@gmail.com",
    },
    {
      name: "Riley-Jay Salazar",
      phone: "+1 236-324-2340",
      address: "789 Place Dr. Vancouver, BC",
      email: "rjsalazar@gmail.com",
    },
    {
      name: "Garrett Mcintyre",
      phone: "+1 778-798-5674",
      address: "123 Palace St. Vancouver, BC",
      email: "gmcintyre@gmail.com",
    }
  ]


function cleanUpIndex() {
  const bodyDiv = document.querySelector('.main')  
  
  while (bodyDiv.firstChild) {
      bodyDiv.firstChild.remove()
  }
}

function createSingleIndex(obj) {
    const link = document.createElement('a')
    const indexCardDiv = document.createElement('div')
    indexCardDiv.classList.add('contact')
    const paragraph = document.createElement('p')
    
    paragraph.innerHTML = obj.name
    indexCardDiv.appendChild(paragraph)
    link.appendChild(indexCardDiv)
    link.href = 'page3.html'


    link.addEventListener('click', (e)=> {
      createdName = paragraph.innerHTML
      e.preventDefault()

      for (let i = 0; i < contactList.length; i++) {
        if (paragraph.innerHTML == contactList[i].name){
          cleanUpView()
          renderView(contactList[i])
        }
      }
    })

    return link
}


function renderIndex(array) {
    const bodyDiv = document.querySelector('.main')
  
    for (let i = 0; i < array.length; i++) {
      bodyDiv.appendChild(createSingleIndex(contactList[i]))
    }
}


function cleanUpView() {
  const contactInfoDiv = document.querySelector('.main')

  while (contactInfoDiv.firstChild) {
    contactInfoDiv.firstChild.remove()
  }
}


function renderView(obj) {
  const bodyDiv = document.querySelector('.main')


  const contactName = document.createElement('div')
  contactName.classList.add('contactname')
  contactName.innerHTML = obj.name 
  contactInfoDiv.appendChild(contactName)


  const contactInfoDiv = document.createElement('div')
  contactInfoDiv.classList.add('contactinfo')
  bodyDiv.appendChild(contactInfoDiv)


  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = "./img/profile.jpg"
  profilePic.alt = "Profile picture"
  contactName.appendChild(profilePic)


  const contactPhone = document.createElement('div')
  contactPhone.classList.add('contactphone')
  contactPhone.innerHTML = `cell: ${obj.phone}` 
  contactInfoDiv.appendChild(contactPhone)


  const contactEmail = document.createElement('div')
  contactEmail.classList.add('contactemail')
  contactEmail.innerHTML = `email: ${obj.email}` 
  contactInfoDiv.appendChild(contactEmail)


  const contactAddress = document.createElement('div')
  contactAddress.classList.add('contactaddress')
  contactAddress.innerHTML = `address: ${obj.address}` 
  contactInfoDiv.appendChild(contactAddress)


  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('buttons')
  contactInfoDiv.appendChild(buttonContainer)


  const editButton = document.createElement('button')
  editButton.classList.add('edit', 'button')
  editButton.innerHTML = 'Edit'
  buttonContainer.appendChild(editButton)


  const closeButton = document.createElement('button')
  closeButton.classList.add('close', 'button')
  closeButton.innerHTML = 'Close'
  buttonContainer.appendChild(closeButton)



  closeButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    cleanUpView()
    renderIndex(contactList)
  
  })


  editButton.addEventListener('click', (e)=> {
    e.preventDefault()
  })
}



function cleanUpCreate() {
  const contactEditDiv = document.querySelector('.main')

  while (contactEditDiv.firstChild) {
    contactEditDiv.firstChild.remove()
  }
}


function renderCreate(obj) {
  const bodyDiv = document.querySelector('.main')


  const contactEditDiv = document.createElement('div')
  contactEditDiv.classList.add('contactedit')
  bodyDiv.appendChild(contactEditDiv)
  

  const contactImgDiv = document.createElement('div')
  contactImgDiv.classList.add('contactimg')
  contactEditDiv.appendChild(contactImgDiv)

  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = './img/profile.jpg'
  profilePic.alt = 'Profile Picture'
  contactImgDiv.appendChild(profilePic)

  const formDiv = document.createElement('div')
  formDiv.classList.add('form') 
  contactEditDiv.appendChild(formDiv)

  const form = document.createElement('form')
  formDiv.appendChild(form)

 
  const inputNameDiv = document.createElement('div')
  inputNameDiv.classList.add('inputcontainer')
  form.appendChild(inputNameDiv)

  const inputName = document.createElement('input')
  inputName.setAttribute('id', 'contactname')
  inputName.type = 'text'
  inputName.name = 'contactname'
  inputName.placeholder = 'Contact Name'
  inputNameDiv.appendChild(inputName)

  const addNameButton = document.createElement('button')
  addNameButton.setAttribute('id', 'extranamefield')
  addNameButton.classList.add('extrafield')
  addNameButton.name = 'extranamefield'
  addNameButton.innerHTML = '+'
  inputNameDiv.appendChild(addNameButton)


  const inputPhoneDiv = document.createElement('div')
  inputPhoneDiv.classList.add('inputcontainer')
  form.appendChild(inputPhoneDiv)

  const inputPhone = document.createElement('input')
  inputPhone.setAttribute('id', 'contactphone') 
  inputPhone.type = 'tel'
  inputPhone.name = 'contactphone'
  inputPhone.placeholder = 'Contact Phone'
  inputPhoneDiv.appendChild(inputPhone)

  const addPhoneButton = document.createElement('button')
  addPhoneButton.setAttribute('id', 'extraphonefield')
  addPhoneButton.classList.add('extrafield')
  addPhoneButton.name = 'extraphonefield'
  addPhoneButton.innerHTML = '+'
  inputPhoneDiv.appendChild(addPhoneButton)


 
  const inputEmailDiv = document.createElement('div')
  inputEmailDiv.classList.add('inputcontainer')
  form.appendChild(inputEmailDiv)

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('id', 'contactemail') 
  inputEmail.type = 'email'
  inputEmail.name = 'contactemail'
  inputEmail.placeholder = 'Contact Email'
  inputEmailDiv.appendChild(inputEmail)

  const addEmailButton = document.createElement('button')
  addEmailButton.setAttribute('id', 'extraemailfield')
  addEmailButton.classList.add('extrafield')
  addEmailButton.name = 'extraemailfield'
  addEmailButton.innerHTML = '+'
  inputEmailDiv.appendChild(addEmailButton)



  const inputAddressDiv = document.createElement('div')
  inputAddressDiv.classList.add('inputcontainer')
  form.appendChild(inputAddressDiv)

  const inputAddress = document.createElement('input')
  inputAddress.setAttribute('id', 'contactaddress') 
  inputAddress.type = 'text'
  inputAddress.name = 'contactaddress'
  inputAddress.placeholder = 'Contact Address'
  inputAddressDiv.appendChild(inputAddress)

  const addAddressButton = document.createElement('button')
  addAddressButton.setAttribute('id', 'extraaddressfield')
  addAddressButton.classList.add('extrafield')
  addAddressButton.name = 'extraaddressfield'
  addAddressButton.innerHTML = '+'
  inputAddressDiv.appendChild(addAddressButton)



  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('buttons')
  form.appendChild(buttonContainer)


  const submitButton = document.createElement('button')
  submitButton.setAttribute('id', 'savecontact')
  submitButton.classList.add('save', 'button')
  submitButton.type = 'submit'
  submitButton.name = 'savecontact'
  submitButton.innerHTML = 'Save Contact'
  buttonContainer.appendChild(submitButton)


  const cancelButton = document.createElement('button')
  cancelButton.setAttribute('id', 'cancel')
  cancelButton.classList.add('cancel', 'button')
  cancelButton.type = 'reset'
  cancelButton.name = 'cancel'
  cancelButton.innerHTML = 'Cancel'
  buttonContainer.appendChild(cancelButton)


  cancelButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    cleanUpCreate()
    renderIndex(contactList)
  
  })


  submitButton.addEventListener('click', (e)=> {
    e.preventDefault()
    
    newObj = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      address: inputAddress.value,
    }

    contactList.push(newObj)
    
    cleanUpCreate()
    renderIndex(contactList)
  })
}


const navContactButton = document.querySelector('#contactshome')

navContactButton.addEventListener('click', (e) => {
  e.preventDefault()
  
  cleanUpIndex()
  renderIndex(contactList)

})


const navCreateButton = document.querySelector('#newcontact')

navCreateButton.addEventListener('click', (e) => {
  e.preventDefault()

  cleanUpCreate()
  renderCreate(contactList)
})