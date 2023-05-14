const form = document.querySelector('form');
const input = document.getElementsByClassName('form-email_input')[0];
const divContainer = document.getElementsByClassName('container')[0];
const divEmailList = document.getElementsByClassName('email')[0];
const EMAIL_REGEXP = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
const validateEmail = (email) => EMAIL_REGEXP.test(String(email).toLowerCase());
const buttonEmailAdd = document.getElementsByClassName('form-email_button')[0];


buttonEmailAdd.addEventListener('click', function(event) {
  if (event.target.className != 'form-email_button') return;

  if (!validateEmail(input.value)) {
    alert('Вами введен некорректный адрес электронной почты. Попробуйте еще раз.');
    return;
  }

  let newDiv = divEmailList.cloneNode(true);
  newDiv.hidden = false;
  let paragraph = newDiv.querySelector('p');
  paragraph.textContent = input.value;
  console.log(newDiv);
  divContainer.append(newDiv);
})

document.addEventListener('click', function(event) {
  if (event.target.className != 'email_remove') return;

  let emailList = event.target.closest('.email');
  console.log(emailList);
  emailList.remove();
})

