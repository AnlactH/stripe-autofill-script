let inputs = document.getElementsByTagName('input');

const data = {
    email: "test@gmail.com",
    name: "test name",
    phone: "6474447777",
    address: '356 test ave',
    city: 'new york',
    state: 'CA',
    postal_code: 9403,
    ccNum: 42424242424242424,
    expDate: '12/22',
    cvc: 777
};
window.onload = () => {
  //Name
  chrome.storage.local.set({'name': inputs.value}, function() {
    console.log('name')
  });
  chrome.storage.local.get('name', function() {
    document.querySelector('input[name=name]').value = data.name
  });

  //Email
  chrome.storage.local.set({'email': inputs.value}, function() {
    console.log('email')
  });
  chrome.storage.local.get('email', function() {
    document.querySelector('input[name=email]').value = data.email
  });

  //Address
  chrome.storage.local.set({'address': inputs.value}, function() {
    console.log('address')
  });
  chrome.storage.local.get('address', function() {
    document.querySelector('input[name=address]').value = data.address
  });

  //City
  chrome.storage.local.set({'city': inputs.value}, function() {
    console.log('city')
  });
  chrome.storage.local.get('city', function() {
    document.querySelector('input[name=city]').value = data.city
  });

  //State
  chrome.storage.local.set({'state': inputs.value}, function() {
    console.log('state')
  });
  chrome.storage.local.get('state', function() {
    document.querySelector('input[name=state]').value = data.state
  });

  //postal_code
  chrome.storage.local.set({'postal_code': inputs.value}, function() {
    console.log('postal_code')
  });
  chrome.storage.local.get('postal_code', function() {
    document.querySelector('input[name=postal_code]').value = data.postal_code
  });

  //card number
  chrome.storage.local.set({'cardnumber': inputs.value}, function() {
    console.log('cardnumber')
  });
  chrome.storage.local.get('cardnumber', function() {
  });

  //Expiry Date
  chrome.storage.local.set({'exp': inputs.value}, function() {
    console.log('exp date')
  });
  chrome.storage.local.get('exp', function() {
  });

  //cvc
  chrome.storage.local.set({'cvc': inputs.value}, function() {
    console.log('cvc')
  });
  chrome.storage.local.get('cvc', function() {
  });
}

//FIX CC
//DON'T FORGET TO RELOAD EXTENSION FOR IT TO RUN