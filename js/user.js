'use strict';
const userArray = JSON.parse( localStorage.getItem( 'users' ) ) || [];
// let cards = document.querySelector( 'main' );
function appendCompany() {
  //   let section = document.createElement( 'section' );
  //   section.setAttribute( 'Class', 'cards' );
  for ( const i of userArray ) {
    document.getElementById( 'name' ).textContent = `${i.fName} ${i.lName}`;
    document.getElementById( 'userProfile' ).src = '../res/defaultpic.jpg';
    document.getElementById( 'edu' ).textContent = 'CIS';
    document.getElementById( 'shift' ).textContent = 'MORNING';
    document.getElementById( 'email' ).textContent = i.email;
    document.getElementById( 'phone' ).textContent = i.phone;
    document.getElementById( 'location' ).textContent = 'Amman';
  }
  //   cards.appendChild( section )
}
appendCompany();
document.getElementsByClassName( 'close' )[0].addEventListener( 'click', hideModal );
let editProfileModal = document.getElementById( 'myModal' );
let openNewFormbtn = document.getElementById( 'openNewFormbtn' );
let editProfileBtn = document.getElementById( 'editProfileBtn' );
editProfileBtn.addEventListener( 'click',openEditProfile );
function openEditProfile(){
  editProfileModal.style.display = 'block';
}
function hideModal() {
  // modal.style.display = 'none';
  editProfileModal.style.display = 'none';
}
openNewFormbtn.addEventListener( 'click',acclogOut );
function acclogOut( e ){
  e.preventDefault();
  localStorage.removeItem( 'CURRENT_USER' );
  window.location = '../index.html';
}


