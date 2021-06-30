'use strict';
const jobPostsArray = JSON.parse( localStorage.getItem( 'posts' ) ) || [];
let cards = document.querySelector( 'main' );
function appendJobs(){
  let section = document.createElement( 'section' );
  section.setAttribute( 'Class', 'cards' );
  for ( const i of jobPostsArray ) {
    let article = document.createElement( 'article' );
    article.innerHTML = `  
       <h3>${i.jobTitle}</h3>
       <p >${i.jobDescription.substring( 0, 134 )} ${' ....'}</p>
       <a href="#${i.id}" class='showModal'>Read More</a> `;
    section.appendChild( article );
  }
  cards.appendChild( section );
}
appendJobs();
let modal = document.getElementById( 'myModal' );
let readMore = document.querySelectorAll( '.showModal' );
document
  .getElementsByClassName( 'close' )[0]
  .addEventListener( 'click', hideModal );

function hideModal() {
  modal.style.display = 'none';
}
[].forEach.call( readMore, function ( e ) {
  e.onclick = function () {
    modal.style.display = 'block';
    let jobid = e.href.substring( e.href.indexOf( '#' ) + 1, e.href.length );
    appendModalData( jobid );
  };
} );

window.onclick = function ( event ) {
  if ( event.target === modal ) {
    modal.style.display = 'none';

  }
};

let applyBtn = document.getElementById( 'applyBtn' );
applyBtn.addEventListener( 'click',openapplyform );

function appendModalData ( id ) {
  for ( const i of jobPostsArray ) {
    if ( i.id === id ) {
      applyBtn.value = i.id;

      document.getElementById( 'modalTitle' ).textContent = i.jobTitle;
      document.getElementById( 'jobDescription' ).textContent = `
          Job Description : ${i.jobDescription}`;
      document.getElementById(
        'modalCategory'
      ).textContent = ` ${i.jobCategory}`;
      document.getElementById(
        'modalShift'
      ).textContent = `Shift : ${i.jobShift}`;
      document.getElementById(
        'modalPayRate'
      ).textContent = `Pay Rate : ${i.payRate}`;
      document.getElementById( 'company-logo' ).src = '../res/' + i.companySrc;
    }
  }
}

let jobapplicationform = document.getElementById( 'jobapplicationform' );
function openapplyform( ){
  for ( const i of jobPostsArray ) {
    if ( i.id === applyBtn.value ) {
      document.getElementById( 'applicationTitle' ).textContent = i.jobTitle;
      jobapplicationform.style.display = 'block';
    }}}


const Jobapplications = function ( applications ) {
  this.applications = applications;
};
Jobapplications.prototype.addApplication = function ( appID,fullName,email,age,currentStatus,comments,cvPath,
  jobID,jobTitle,userID,datesubmitted ) {
  let newApplication = new NewApplication( appID,fullName,email,age,currentStatus,comments,cvPath,
    jobID,jobTitle,userID,datesubmitted );
  this.applications.push( newApplication );
};
Jobapplications.prototype.saveToLocalStorage = function () {
  localStorage.setItem( 'jobapplications', JSON.stringify( this.applications ) );
};
Jobapplications.prototype.removeApplication = function ( application ) {
  this.newPosts.splice( application, 1 );
};
const NewApplication = function( appID,fullName,email,age,currentStatus,comments,cvPath,
  jobID,jobTitle,userID,datesubmitted ) {
  this.appID = appID;
  this.fullName = fullName;
  this.email = email;
  this.age = age;
  this.currentStatus = currentStatus;
  this.comments = comments;
  this.cvPath = cvPath;
  this.jobID = jobID;
  this.jobTitle = jobTitle;
  this.userID = userID;
  this.datesubmitted = datesubmitted;
};

const application = new Jobapplications( [] );
document
  .getElementsByClassName( 'close' )[1]
  .addEventListener( 'click', hideform );
function hideform() {
  jobapplicationform.style.display = 'none';
}
const currentuserArr = JSON.parse( localStorage.getItem( 'CURRENT_USER' ) ) || [];
let applicationSubmit = document.getElementById( 'applicationSubmit' );
applicationSubmit.addEventListener( 'click', submitForm );

application.addApplication( 0,'fullName','email','age','currentStatus','comments','cvPath','jobID','jobTitle','userID','datesubmitted' );

if( JSON.parse( localStorage.getItem( 'jobapplications' ) ) ){
  const lStorageApplications = JSON.parse( localStorage.getItem( 'jobapplications' ) ) || [];
  application.applications = [];
  for ( let i = 0 ; i < lStorageApplications.length ;i++ ) {
    application.addApplication( lStorageApplications[i].appID,
      lStorageApplications[i].fullName,
      lStorageApplications[i].email,
      lStorageApplications[i].age,
      lStorageApplications[i].currentStatus,
      lStorageApplications[i].comments,
      lStorageApplications[i].cvPath,
      lStorageApplications[i].jobID ,
      lStorageApplications[i].cvPath,
      lStorageApplications[i].jobTitle ,
      lStorageApplications[i].userID,
      lStorageApplications[i].datesubmitted );
  }


}

function validateForm(){

  return true ;
}

let appID,fullName,email,age,currentStatus,comments,cvPath,jobID,jobTitle,userID,datesubmitted,position;

function submitForm(){
  position = document.getElementById( 'dropdown' );
  fullName = document.getElementById( 'fullName' ).value;
  email = document.getElementById( 'email' ).value;
  age = document.getElementById( 'number' ).value;
  currentStatus = position.options[position.selectedIndex].value;
  comments = document.getElementById( 'comments' ).value;
  cvPath = document.getElementById( 'fileToUpload' ).value;
  jobTitle = document.getElementById( 'applicationTitle' ).value;
  datesubmitted = Date();

  if ( validateForm() ){
    if ( JSON.parse( localStorage.getItem( 'CURRENT_USER' ) ) ) {
      jobID = applyBtn.value;
      userID = currentuserArr.id;
      appID = jobID + userID;
      let exists = false;
      for ( const i of application.applications ){
        console.log( i );
        if ( i.appID === appID ){
          exists = true;
          Swal.fire( {
            position: 'top-end',
            icon: 'success',
            title: 'allready Applied',
            showConfirmButton: false,
            timer: 2000
          } );
          hideModal();
          break;}}
      if( !exists ){

        application.addApplication( appID,fullName,email,age,currentStatus,comments,cvPath,jobID,jobTitle,userID,datesubmitted );
        console.log( application.applications );
        console.log( Date() );
        application.saveToLocalStorage( application.applications );
        jobapplicationform.style.display = 'none';
        Swal.fire( {
          position: 'top-end',
          icon: 'success',
          title: 'Your application submitted',
          showConfirmButton: false,
          timer: 2000

        } );
        hideModal();
      }}else{
      {
        Swal.fire( {
          position: 'top-end',
          icon: 'success',
          title: 'Your application submitted',
          showConfirmButton: false,
          timer: 2000

        } );
        Swal.fire(
          'Applying for a job!',
          'You must register or login to apply',
          'question' );

      }
    }

  }


}

