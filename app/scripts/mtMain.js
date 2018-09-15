// FOR BACON TAB --------------------------------------
function moreBacon() {
  let imgBacon = document.querySelector('.imgBacon').cloneNode(true)
  let baconContainer = document.querySelector('.bacon-container')
  baconContainer.appendChild(imgBacon)
}

// FOR CHECKOUT TAB -----------------------------------
InfoOfUser = function (thisDocument) { //basic of user
  let self = {}
  let backBank = { // this info NOT will be return
    thisSuperDocument: thisDocument,
    allFieldsFinded: false,
    findedError: false,
    alertSuccess: thisDocument.querySelector('.mtApp-alert')
  }
  let fieldsBox = {}  // boxes input/select. This info NOT will be return
  self.validationGo = function () {
    if (backBank.allFieldsFinded === false) {
      backBank.getAllFields()
    }
    else {
      backBank.getText()
      backBank.findedError = false
      for (let key in self) {
        if (typeof fieldsBox[key] === 'object') {
          if (self[key].type === 'text') {
            self[key] = backBank.validText(self[key])
          }
          else if (self[key].type === 'number') {
            self[key] = backBank.validNumber(self[key])
          }
          else if (self[key].type === 'email') {
            self[key] = backBank.validEmail(self[key])
          }
          if (self[key].statusError === true) {
            backBank.findedError = true
            fieldsBox[key].classList.add('error')
            function insertAfter(newNode, referenceNode) {
              referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
            if (fieldsBox[key].parentNode.querySelector('.errorField') !== null) {
              fieldsBox[key].parentNode.removeChild(fieldsBox[key].parentNode.querySelector('.errorField'));
            }
            var el = document.createElement("p");
            el.classList.add('errorField')
            el.innerHTML = self[key].descError;
            insertAfter(el, fieldsBox[key])
          }
          else {
            fieldsBox[key].classList.remove('error')
            if (fieldsBox[key].parentNode.querySelector('.errorField') !== null) {
              fieldsBox[key].parentNode.removeChild(fieldsBox[key].parentNode.querySelector('.errorField'));
            }
          }
        }
      }

      if(backBank.findedError === false){
        backBank.showAlert(true, 'Verification was successful')
      }
    }
  }
  backBank.showAlert = function(status,thisText){
    if (status === true){
      backBank.alertSuccess.classList.add('alert-open')
      backBank.alertSuccess.querySelector('.alert__desc').innerHTML = thisText
    }
    else {
      backBank.alertSuccess.classList.remove('alert-open')
    }
    setTimeout(function () {
      backBank.alertSuccess.classList.remove('alert-open')
    }, 4000)
  }
  backBank.standardValid = function (thisObject) {
    let thisSuperObject = thisObject
    thisSuperObject.statusError = false
    thisSuperObject.descError = ''
    if (thisSuperObject.value.length === 0) {
      thisSuperObject.statusError = true
      thisSuperObject.descError = 'Can`t be empty. Add Symbols'
    }
    else if (thisSuperObject.min !== undefined
      && thisSuperObject.min > thisSuperObject.value.length) {
      thisSuperObject.statusError = true
      thisSuperObject.descError = 'MIN text length is ' + thisSuperObject.min + ' symbols'
    }
    else if (thisSuperObject.max !== undefined
      && thisSuperObject.max < thisSuperObject.value.length) {
      thisSuperObject.statusError = true
      thisSuperObject.descError = 'MAX text length is ' + thisSuperObject.max + ' symbols'
    }
    return thisSuperObject
  }
  backBank.validText = function (infoObject) {
    let selfSystem = backBank.standardValid(infoObject)
    return selfSystem
  }
  backBank.validNumber = function (infoObject) {
    let selfSystem = backBank.standardValid(infoObject)
    let originLength = selfSystem.value.toString().length
    selfSystem.value = parseInt(selfSystem.value)
    console.log(selfSystem.value,originLength,selfSystem.value.toString().length)
    if(!isNaN(selfSystem.value) && originLength !== selfSystem.value.toString().length && selfSystem.value.toString().length < selfSystem.min){
      selfSystem.statusError = true
      selfSystem.descError = 'This field have TEXT. Must be only NUMBERS'
    }
      return selfSystem
  }
  backBank.validEmail = function (infoObject) {
    let selfSystem = backBank.standardValid(infoObject)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = re.test(String(selfSystem.value).toLowerCase());
    if (!validEmail) {
      selfSystem.statusError = true
      selfSystem.descError = 'Not correct email'
    }
    return selfSystem
  }
  backBank.getText = function () {
    for (let thisSuperBox in fieldsBox) {
      let checkBox = thisSuperBox
      if (typeof fieldsBox[checkBox] === 'object') {
        self[checkBox].value = fieldsBox[checkBox].value
      }
    }
  }
  backBank.getAllFields = function () {
    for (let key in self) {
      if (typeof self[key] === 'object') {
        let findedObjects = backBank.thisSuperDocument.querySelectorAll('#' + key)
        if (findedObjects.length > 1) {
          console.warn('Danger, this input ' + key + ' added twice for your page!')
        } else if (findedObjects.length === 0) {
          console.warn('Can`t finded ' + key + ' box')
        } else {
          fieldsBox[key] = findedObjects[0]
        }
      }
    }
    if (fieldsBox !== null) {
      backBank.allFieldsFinded = true
      self.validationGo()
    }
  }
  return self
}

let thisUser
document.addEventListener('DOMContentLoaded', function () {
  thisUser = new InfoOfUser(document) //create
  thisUser.firstName = {
    type: 'text',
    min: 2,
    max: 10
  }
  thisUser.lastName = {
    type: 'text',
    min: 2,
    max: 10
  }
  thisUser.email = {
    type: 'email',
    min: 10,
    max: 100
  }
  thisUser.country = {
    type: 'text',
    min: 0,
    max: 100
  }
  thisUser.phoneNumber = {
    type: 'number',
    min: 10,
    max: 10
  }
  thisUser.postalCode = {
    type: 'number',
    min: 5,
    max: 5
  }
  thisUser.creditCard = {
    type: 'number',
    min: 16,
    max: 16
  }
  thisUser.securityCode = {
    type: 'number',
    min: 3,
    max: 3
  }
  thisUser.expirationDate = {
    type: 'number',
    min: 4,
    max: 4
  }
});

function sendInfo(event) {
  thisUser.validationGo()

}
