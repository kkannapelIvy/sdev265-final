const form = document.querySelector('#myForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!firstName.value) {
    alert('Please enter your first name.');
    firstName.focus();
  } else if (!lastName.value) {
    alert('Please enter your last name.');
    lastName.focus();
  } else if (!email.value) {
    alert('Please enter your email.');
    email.focus();
  } else if (!comment.value) {
    alert('Please enter your comment.');
    comment.focus();
  } else {
    form.submit();
  }
});