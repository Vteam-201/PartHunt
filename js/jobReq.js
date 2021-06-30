'use strict';
const jopForm = document.getElementById( 'post' );
const jPost = document.getElementById( 'jPost' );

function ReqJob( userName, phone,email,reqJob,specialties,shiftRe,education,expSalary ) {
  this.userName = userName;
  this.phone = phone;
  this.email = email;
  this.reqJob = reqJob;
  this.specialties = specialties;
  this.shiftRe = shiftRe;
  this.education = education;
  this.expSalary = expSalary;
  ReqJob.alljobs.push( this );
}
ReqJob.alljobs = [];

ReqJob.prototype.render = function ( ) {

  let liReq = document.createElement( 'article' );
  let h3 = document.createElement( 'h3' );
  h3.textContent = this.reqJob;
  liReq.appendChild( h3 );

  let p = document.createElement( 'p' );
  p.textContent = `Hello, i am looking for a job in ${this.shiftRe} shift ,and specialties in ${this.specialties} ,
knowing that my education is ${this.education} ,
also i am expecting ${this.expSalary} as a salary,
 i am ${this.userName} and my phone number is ${ this.phone} ,
my email ${this.email}. i am a fast learner and i have a proven time management skills `;
  liReq.appendChild( p );

  let a = document.createElement( 'a' );
  a.href = `mailto:${this.email}`;
  a.textContent = 'Email Me';
  liReq.appendChild( a );
  jPost.appendChild( liReq );

};

jopForm.addEventListener( 'submit',handleSubmit );

function handleSubmit( event ){
  event.preventDefault();

  let userName = event.target.reqName.value;
  let phone = event.target.rPhone.value;
  let email = event.target.rEmail.value;
  let reqJob = event.target.reqjob.value;

  let specialties = event.target.rSpecialties.options[event.target.rSpecialties.selectedIndex].value;
  let shiftRe = event.target.shiftreq.options[event.target.shiftreq.selectedIndex].value;

  let education = event.target.jReducation.options[event.target.jReducation.selectedIndex].value;
  let expSalary = event.target.expectedSalary.options[event.target.expectedSalary.selectedIndex].value;
  console.log( ReqJob.alljobs );

  new ReqJob( userName, phone,email,reqJob,specialties,shiftRe,education,expSalary );
  console.log( ReqJob.alljobs );
  loadData();
  localStorage.setItem( 'jobRequest', JSON.stringify( ReqJob.alljobs ) );
  jopForm.reset();
}
function loadData(){
  jPost.innerHTML = '';
  for ( let i in ReqJob.alljobs ){
    ReqJob.alljobs[i].render();
  }
}
function getFromLocal() {
  ReqJob.alljobs.length = 0;
  let data = JSON.parse( localStorage.getItem( 'jobRequest' ) );
  if( data ) {
    for( let i = 0; i < data.length ; i++ ) {
      let newReqJob = new ReqJob( data[i].userName, data[i].phone,data[i].email,data[i].reqJob,data[i].specialties,data[i].shiftRe,data[i].education,data[i].expSalary );
      loadData();
    }
  }
}

getFromLocal();
