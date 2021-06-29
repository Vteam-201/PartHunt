'use strict';

let alljobs = [];
function Reqjob( userName, phone,email,reqJob,specialties,shiftRe,education,expSalary ) {
  this.userName = userName;
  this.phone = phone;
  this.email = email;
  this.reqJob = reqJob;
  this.specialties = specialties;
  this.shiftRe = shiftRe;
  this.education = education;
  this.expSalary = expSalary;
  alljobs.push( this );
}
let post = document.getElementById( 'senddata' );
post.addEventListener( 'click' , handleSubmit );

function handleSubmit (){
  let userName = document.getElementById( 'reqName' ).value;
  let phone = document.getElementById( 'rPhone' ).value;
  let email = document.getElementById( 'rEmail' ).value;
  let reqJob = document.getElementById( 'reqjob' ).value;
  let specialties = document.getElementById( 'rSpecialties' ).options[document.getElementById( 'rSpecialties' ).selectedIndex].value;
  let shiftRe = document.getElementById( 'shiftReq' ).options[document.getElementById( 'shiftReq' ).selectedIndex].value;
  let education = document.getElementById( 'EDUCATION' ).options[document.getElementById( 'EDUCATION' ).selectedIndex].value;
  let expSalary = document.getElementById( 'expectedSalary' ).options[document.getElementById( 'expectedSalary' ).selectedIndex].value;
  new Reqjob( userName, phone,email,reqJob,specialties,shiftRe,education,expSalary );
  saveToLocal();

}


function saveToLocal(){
  console.log( alljobs );
  let arrSet = JSON.stringify( alljobs );
  console.log( arrSet );

  localStorage.setItem( 'jobRequest',arrSet );
  console.log( arrSet );
}
function getFromLocal(){
  let data = JSON.parse( localStorage.getItem( 'jobRequest' ) ) || [];

  if( data ){
    for ( let i in data ){
      new Reqjob( i.userName, i.phone,i.email,i.reqJob,i.specialties,i.shiftRe,i.education,i.expSalary );
    }

  }


}

getFromLocal();
