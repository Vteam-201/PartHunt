'use strict';
const companiesArray = JSON.parse( localStorage.getItem( 'companies' ) ) || [];
let comID = getParameterByName( 'id' );
// let cards = document.querySelector( 'main' );
function appendCompany() {
  //   let section = document.createElement( 'section' );
  //   section.setAttribute( 'Class', 'cards' );
  for ( const i of companiesArray ) {
    if ( i.id === comID ){
      document.getElementById( 'name' ).textContent = i.companyName;
      document.getElementById( 'founded' ).textContent = i.founded;
      document.getElementById( 'size' ).textContent = i.size;
      document.getElementById( 'type' ).textContent = i.type;
      document.getElementById( 'companyImg' ).src = `../res/${i.imgSrc}`;
      document.getElementById( 'industry' ).textContent = i.industry;
      document.getElementById( 'specialties' ).textContent = i.specialties;
      document.getElementById( 'email' ).textContent = i.website;
      document.getElementById( 'location' ).textContent = i.headquarters;
      document.getElementById( 'phone' ).textContent = i.phone;
    }

  }
  //   cards.appendChild( section )
}
appendCompany();

function getParameterByName( name, url = window.location.href ) {
  name = name.replace( /[\[\]]/g, '\\$&' );
  let regex = new RegExp( '[?&]' + name + '(=([^&#]*)|&|#|$)' ),
    results = regex.exec( url );
  if ( !results ) return null;
  if ( !results[2] ) return '';
  return decodeURIComponent( results[2].replace( /\+/g, ' ' ) );
}


