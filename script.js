import { Loader } from "@googlemaps/js-api-loader"

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


// var campingSites = [
//   {name: 'Brown County State Park', lat: 39.1933258, lng:-86.2191608},
//   {name: 'Clifty Falls State Park', lat: 38.7720104, lng: -85.4386566},
//   {name: 'Turkey Run State Park', lat: 39.8799879, lng: -87.2348705},
//   {name: 'Hardin Ridge Campground', lat: 39.0185067, lng: -86.4860538}
// ];

// for (var i = 0; i < campingSites.length; i++) {
//   var site = campingSites[i];
//   var marker = new google.maps.Marker({
//     position: {lat: site.lat, lng: site.lng},
//     map: map,
//     title: site.name
//   });
// }

