'use strict';

window.onscroll = function() {myFunction();};

let header = document.getElementById( 'myHeader' );
let sticky = header.offsetTop + 100;
// let logo = document.getElementById( 'logo' );

function myFunction() {
  if ( window.pageYOffset > sticky ) {
    header.classList.add( 'sticky' );
  } else {
    header.classList.remove( 'sticky' );
    // logo.attributes.class.remove( 'logochange' );

  }
}
