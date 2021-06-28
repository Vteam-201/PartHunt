'use strict';
const companiesArray = JSON.parse( localStorage.getItem( 'companies' ) ) || [];

// let cards = document.querySelector( 'main' );
function appendCompany() {
  //   let section = document.createElement( 'section' );
  //   section.setAttribute( 'Class', 'cards' );
  for ( const i of companiesArray ) {
    document.getElementById( 'name' ).textContent = i.companyName;
    document.getElementById( 'founded' ).textContent = i.founded;
    document.getElementById( 'size' ).textContent = i.size;
    document.getElementById( 'type' ).textContent = i.type;
    document.getElementById( 'companyImg' ).src = `../res/${i.imgSrc}`;
    document.getElementById( 'industry' ).textContent = i.industry;
    document.getElementById( 'specialties' ).textContent = i.specialties;
    document.getElementById( 'email' ).textContent = i.address;
    document.getElementById( 'location' ).textContent = i.headquarters;
    document.getElementById( 'phone' ).textContent = i.phone;
  }
  //   cards.appendChild( section )
}
appendCompany();
