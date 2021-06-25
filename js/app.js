
'use strict';
// TODO: User .
// TODO: Comments Constructor.
// TODO: display Comments on jop Modal.


// done: Company .
// done: Create 3 initial companies.
// done: Save them into Local Storage.

// done: Jop post .
// done: Create 3 initial posts.
// done: Save them into Local Storage.
// done: append() (render) Job Posts;

//#region  JobPost
const Posts = function( newPosts ) {
  this.newPosts = newPosts;
};

Posts.prototype.addPost = function( id, companyID, jobTitle, jobDescription, jobCategory, jobShift, payRate, companySrc ) {
  let newPost = new NewPost( id, companyID, jobTitle, jobDescription, jobCategory, jobShift, payRate ,companySrc);
  this.newPosts.push( newPost );
};
Posts.prototype.saveToLocalStorage = function() {
  localStorage.setItem( 'posts', JSON.stringify( this.newPosts ) );
};
Posts.prototype.removeItem = function( post ) {
  this.newPosts.splice( post, 1 );
};

let cards = document.querySelector( 'main' );
Posts.prototype.append = function(){
  let section = document.createElement( 'section' );
  section.setAttribute( 'Class','cards' );
  for ( const i of this.newPosts ) {
    let article = document.createElement( 'article' );
    article.innerHTML =
    `  
       <img src="./res/${i.companyID}.jpg" alt="">
       <h3>${i.jobTitle}</h3>
       <p >${(i.jobDescription).substring(0,134)} ${' ....'}</p>
       <a href="#${i.id}" class='showModal'>Read More</a> `;
    section.appendChild( article );
  }
  cards.appendChild( section );
  {/* <span class="sale">New</span> */}
};

Posts.prototype.appendModalData = function( id ){
  for ( const i of this.newPosts ) {
    if ( i.id === id ){
      document.getElementById( 'modalTitle' ).textContent = i.jobTitle;
      document.getElementById( 'modalContent' ).innerHTML = `<p></p>
      <p>Job Description : ${i.jobDescription}</p><br>`;
      document.getElementById('modalCategory').textContent = ` ${i.jobCategory}`;
           document.getElementById('modalShift').textContent = `Shift : ${i.jobShift}`;
           document.getElementById('modalPayRate').textContent = `Pay Rate : ${i.payRate}`;
      document.getElementById('company-logo').src = i.companySrc1;
    }

  }
};

const NewPost = function( id, companyID, jobTitle, jobDescription, jobCategory, jobShift, payRate,companySrc ){
  this.id = id;
  this.companyID = companyID;
  this.jobTitle = jobTitle;
  this.jobDescription = jobDescription;
  this.id = id; // we don't need this !
  this.jobCategory = jobCategory;
  this.jobShift = jobShift;
  this.payRate = payRate;
  this.companySrc1 =`./res/${companySrc}` ;
};

//initial Values
const posts = new Posts( [] );
posts.addPost( '1','1','Marketing officer',`Responsible for handling customers’ interactions
Responsible for communicating with customers’ via multiple channels
Answer all incoming requests and address customers’ problems in a timely manner
Log all necessary interaction details as instructed
Re-direct requests as per the set processes and take full information as required
Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues
Escalate issues or unresolved queries to the Team Leader or Supervisor as directed
 
Skills
The minimum requirements for this position are;
Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic
Excellent communication (written, verbal and listening skills) in both language
Sales skill is a plus
Ability to work alternating shifts, weekends and holidays based on business needs
Basic customer service skills
Problem solving and analytical thinking
Reporting skills Responsible for handling customers’ interactions Responsible for communicating with customers’ via multiple channels Answer all incoming requests and address customers’ problems in a timely manner Log all necessary interaction details as instructed Re-direct requests as per the set processes and take full information as required Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues Escalate issues or unresolved queries to the Team Leader or Supervisor as directed Skills The minimum requirements for this position are; Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic Excellent communication (written, verbal and listening skills) in both language Sales skill is a plus Ability to work alternating shifts, weekends and holidays based on business needs Basic customer service skills Problem solving and analytical thinking Reporting skills`
  ,'Marketing','A','10JD/Hour','1.jpg');
posts.addPost( `${generateNewID( posts.newPosts )}`,'2','Accountant',`The Senior Communications Coordinator, will lead a dynamic and multi-faceted communications portfolio for the Mercy Corps Syria office. S/he will work closely with the Syria team in developing and disseminating internal and external communications products. The Senior Communications Coordinator will design new internal and external communications strategies, tools, products and deliverables and will conceptualize strategies for visualizing/conveying information to a wide variety of internal audiences including Mercy Corps globally. S/he will ensure that teams adhere to all Mercy Corps’ and donors’ branding and visibility policies and procedures. The Senior Internal Communications Coordinator will provide critical coordination in the communication & information flow for the COVID-19 response. The Senior Communications Coordinator will report to the Grants Management Director while working closely with senior leadership.`
  ,'Accounting','C','7JD/Hour' ,'2.jpg');
posts.addPost( `${generateNewID( posts.newPosts )}`,'3','Customer Service Advisor','Responsible for handling customers’ interactions and communicating with customers’ via multiple channels'
  ,'Sales and Marketing','A','10JD/Hour','3.jpg' );


posts.saveToLocalStorage();
posts.append();

// get html modal
// Read More Button event Listener
// Fill the Modal


// Get the modal
let modal = document.getElementById( 'myModal' );
// Get all buttons that opens the modal
let btns = document.querySelectorAll( '.showModal' );
// Get the <span> element that closes the modal
document.getElementsByClassName( 'close' )[0].addEventListener( 'click',hideModal );

[].forEach.call( btns, function( e ) {
  e.onclick = function() {
    modal.style.display = 'block';

    let jobid =  e.href.substring( e.href.indexOf( '#' ) + 1 , e.href.length );
    // console.log( jobid );
    posts.appendModalData( jobid );

  };
} );
function hideModal () {
  modal.style.display = 'none';
}
// close modal when clicking outside.
window.onclick = function( event ) {
  if ( event.target === modal ) {
    modal.style.display = 'none';
  }
};


// When the user clicks anywhere outside of the modal, close it
// function modeal ( event ) {
//   if ( event.target === modal ) {
//     modal.style.display = 'none';
//   }
// }

//#endregion

//#region Company Profiles
const Companies = function( companies ) {
  this.companies = companies;
};

Companies.prototype.addCompany = function( id, industry, imgSrc, website, phone, size , headquarters,type,founded,specialties,address ) {
  let company = new NewCompanies( id, industry, imgSrc, website, phone, size , headquarters,type,founded,specialties,address );
  this.companies.push( company );
};
Companies.prototype.saveToLocalStorage = function() {
  localStorage.setItem( 'companies', JSON.stringify( this.companies ) );
};
Companies.prototype.removeItem = function( company ) {
  this.newPosts.splice( company, 1 );
};


const NewCompanies = function( id, companyName, industry, imgSrc, website, phone, size , headquarters, type, founded,specialties, address ){
  this.id = id;
  this.companyName = companyName;
  this.industry = industry;
  this.imgSrc = imgSrc;
  this.website = website;
  this.phone = phone;
  this.size = size;
  this.headquarters = headquarters;
  this.type = type;
  this.founded = founded;
  this.specialties = specialties;
  this.address = address;
};

//initial Values
const company = new Companies( [] );
company.addCompany( '1','Amazon' ,'Internet', '1.jpg','http://www.amazon.com','06555555',
  '10,001+ employees','Seattle, WA','Public Company','1970','e-Commerce, Retail, Operations, and Internet',
  'Seattle, WA' );
company.addCompany( `${generateNewID( company.companies )}`,
  'Careem' ,'Information Technology & Services', `${generateNewID( company.companies )}.jpg`,'http://www.careem.com','06555555',
  '1,001-5,000 employees','Dubai, UAE','Privately Held','2012','transportation, technology, and logistics',
  'Amman, Jordan' );
company.addCompany( `${generateNewID( company.companies )}`,
  'Crossover' ,'Information Technology & Services', `${generateNewID( company.companies )}.jpg`,'http://www.crossover.com','06555555',
  '1,001-5,000 employees','Austin, TX','Privately Held','2014','Human Resources, Technology, Information Technology, Remote Jobs, Software Development, and Jobs',
  'Qatar, Doha' );

function generateNewID( array ){
  return parseInt( array[( ( array.length ) - 1 )].id ) + 1;
}
company.saveToLocalStorage();

//#endregion

//#region User Profiles



//#region
