'use strict';
// TODO: Comments Constructor.
// TODO: display Comments on jop post.
//#region 000
let registrationModal = document.getElementById( 'registerModal' );
let registerLink = document.getElementById( 'registerLink' );
let loginRegisterForm = document.getElementById( 'loginRegisterForm' );
let closeBtn = document.getElementById( 'closeFormbtn' );
let openFormbtn = document.getElementById( 'openNewFormbtn' );
let chooseAccountTypeBtns  = document.getElementById( 'chooseAccountTypeBtns' );
let regUser  = document.getElementById( 'regUser' );
let loginBtn  = document.getElementById( 'loginBtn' );
let logoutBtn = document.getElementById( 'acclogOut' );
let likesbtn = document.getElementById( 'likesLabel' );

likesbtn.addEventListener( 'click',likeBtnClicked );
logoutBtn.addEventListener( 'click', acclogOut );
loginRegisterForm.style.display = 'none';
document.getElementById( 'loggedIn' ).style.display = 'none';
document.getElementById( 'ReguserForm' ).style.display = 'none';
document.getElementById( 'regCompanyForm' ).style.display = 'none';
chooseAccountTypeBtns.addEventListener( 'click', accountregView );
registerLink.addEventListener( 'click', openLoginregisterForm );

regUser.addEventListener( 'click', regUserBtn );
openFormbtn.addEventListener( 'click', toggleForm );
closeBtn.addEventListener( 'click', toggleForm );
loginBtn.addEventListener( 'click', acclogin );
document.getElementsByClassName( 'close' )[0].addEventListener( 'click', hideModal );
let regCompany  = document.getElementById( 'regCompanyBtn' );
regCompany.addEventListener( 'click', regCompanyBtn );



//#endregion
//#region  JobPost
const Posts = function ( newPosts ) {
  this.newPosts = newPosts;
};

Posts.prototype.addPost = function (
  id,
  companyID,
  jobTitle,
  jobDescription,
  jobCategory,
  jobShift,
  payRate,
  companySrc
) {
  let newPost = new NewPost(
    id,
    companyID,
    jobTitle,
    jobDescription,
    jobCategory,
    jobShift,
    payRate,
    companySrc
  );
  this.newPosts.push( newPost );
};
Posts.prototype.saveToLocalStorage = function () {
  localStorage.setItem( 'posts', JSON.stringify( this.newPosts ) );
};
Posts.prototype.removeItem = function ( post ) {
  this.newPosts.splice( post, 1 );
};

let cards = document.getElementById( 'indexMain' );
Posts.prototype.append = function () {
  let section = document.createElement( 'section' );
  section.setAttribute( 'Class', 'cards' );
  for ( const i of this.newPosts ) {
    let article = document.createElement( 'article' );
    article.innerHTML = `  
       <img src="./res/${i.companyID}.jpg" alt="">
       <h3>${i.jobTitle}</h3>
       <p >${i.jobDescription.substring( 0, 134 )} ${' ....'}</p>
       <a href="#${i.id}" class='showModal'>Read More</a> `;
    section.appendChild( article );
  }
  cards.appendChild( section );

};

Posts.prototype.appendModalData = function ( id ) {
  for ( const i of this.newPosts ) {
    if ( i.id === id ) {
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
      document.getElementById( 'company-logo' ).src = './res/' + i.companySrc;
    }
  }
};

const NewPost = function (
  id,
  companyID,
  jobTitle,
  jobDescription,
  jobCategory,
  jobShift,
  payRate,
  companySrc
) {
  this.id = id;
  this.companyID = companyID;
  this.jobTitle = jobTitle;
  this.jobDescription = jobDescription;
  this.jobCategory = jobCategory;
  this.jobShift = jobShift;
  this.payRate = payRate;
  this.companySrc = companySrc;
};

//initial Values
const posts = new Posts( [] );
posts.addPost(
  '1',
  '1',
  'Marketing officer',
  `Responsible for handling customers’ interactions
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
Reporting skills Responsible for handling customers’ interactions Responsible for communicating with customers’ via multiple channels Answer all incoming requests and address customers’ problems in a timely manner Log all necessary interaction details as instructed Re-direct requests as per the set processes and take full information as required Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues Escalate issues or unresolved queries to the Team Leader or Supervisor as directed Skills The minimum requirements for this position are; Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic Excellent communication (written, verbal and listening skills) in both language Sales skill is a plus Ability to work alternating shifts, weekends and holidays based on business needs Basic customer service skills Problem solving and analytical thinking Reporting skills`,
  'Marketing',
  'A',
  '10JD/Hour',
  '1.jpg'
);
posts.addPost(
  `${generateNewID( posts.newPosts )}`,
  '1',
  'Marketing officer',
  `Responsible for handling customers’ interactions
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
Reporting skills Responsible for handling customers’ interactions Responsible for communicating with customers’ via multiple channels Answer all incoming requests and address customers’ problems in a timely manner Log all necessary interaction details as instructed Re-direct requests as per the set processes and take full information as required Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues Escalate issues or unresolved queries to the Team Leader or Supervisor as directed Skills The minimum requirements for this position are; Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic Excellent communication (written, verbal and listening skills) in both language Sales skill is a plus Ability to work alternating shifts, weekends and holidays based on business needs Basic customer service skills Problem solving and analytical thinking Reporting skills`,
  'Marketing',
  'A',
  '10JD/Hour',
  '1.jpg'
);
posts.addPost(
  `${generateNewID( posts.newPosts )}`,
  '1',
  'Marketing officer',
  `Responsible for handling customers’ interactions
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
Reporting skills Responsible for handling customers’ interactions Responsible for communicating with customers’ via multiple channels Answer all incoming requests and address customers’ problems in a timely manner Log all necessary interaction details as instructed Re-direct requests as per the set processes and take full information as required Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues Escalate issues or unresolved queries to the Team Leader or Supervisor as directed Skills The minimum requirements for this position are; Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic Excellent communication (written, verbal and listening skills) in both language Sales skill is a plus Ability to work alternating shifts, weekends and holidays based on business needs Basic customer service skills Problem solving and analytical thinking Reporting skills`,
  'Marketing',
  'A',
  '10JD/Hour',
  '1.jpg'
);
posts.addPost(
  `${generateNewID( posts.newPosts )}`,
  '1',
  'Marketing officer',
  `Responsible for handling customers’ interactions
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
Reporting skills Responsible for handling customers’ interactions Responsible for communicating with customers’ via multiple channels Answer all incoming requests and address customers’ problems in a timely manner Log all necessary interaction details as instructed Re-direct requests as per the set processes and take full information as required Follow company procedures when handling incoming and outgoing interactions with the ability to resolve and close issues Escalate issues or unresolved queries to the Team Leader or Supervisor as directed Skills The minimum requirements for this position are; Candidate must be fluent in English (at least level B2 or preferably C1/C2) and Arabic Excellent communication (written, verbal and listening skills) in both language Sales skill is a plus Ability to work alternating shifts, weekends and holidays based on business needs Basic customer service skills Problem solving and analytical thinking Reporting skills`,
  'Marketing',
  'A',
  '10JD/Hour',
  '1.jpg'
);
posts.addPost(
  `${generateNewID( posts.newPosts )}`,
  '2',
  'Accountant',
  'The Senior Communications Coordinator, will lead a dynamic and multi-faceted communications portfolio for the Mercy Corps Syria office. S/he will work closely with the Syria team in developing and disseminating internal and external communications products. The Senior Communications Coordinator will design new internal and external communications strategies, tools, products and deliverables and will conceptualize strategies for visualizing/conveying information to a wide variety of internal audiences including Mercy Corps globally. S/he will ensure that teams adhere to all Mercy Corps’ and donors’ branding and visibility policies and procedures. The Senior Internal Communications Coordinator will provide critical coordination in the communication & information flow for the COVID-19 response. The Senior Communications Coordinator will report to the Grants Management Director while working closely with senior leadership.',
  'Accounting',
  'C',
  '7JD/Hour',
  '2.jpg'
);
posts.addPost(
  `${generateNewID( posts.newPosts )}`,
  '3',
  'Customer Service Advisor',
  'The Senior Communications Coordinator, will lead a dynamic and multi-faceted communications portfolio for the Mercy Corps Syria office. S/he will work closely with the Syria team in developing and disseminating internal and external communications products. The Senior Communications Coordinator will design new internal and external communications strategies, tools, products and deliverables and will conceptualize strategies for visualizing/conveying information to a wide variety of internal audiences including Mercy Corps globally. S/he will ensure that teams adhere to all Mercy Corps’ and donors’ branding and visibility policies and procedures. The Senior Internal Communications Coordinator will provide critical coordination in the communication & information flow for the COVID-19 response. The Senior Communications Coordinator will report to the Grants Management Director while working closely with senior leadership.',
  'Sales and Marketing',
  'A',
  '10JD/Hour',
  '3.jpg'
);

posts.saveToLocalStorage();

// get html modal
// Read More Button event Listener
// Fill the Modal
// Get the modal
posts.append();
// Get the modal
let modal = document.getElementById( 'myModal' );
// Get all buttons that opens the modal
let readMore = document.querySelectorAll( '.showModal' );
// Get the <span> element that closes the modal
document
  .getElementsByClassName( 'close' )[1]
  .addEventListener( 'click', hideModal );

[].forEach.call( readMore, function ( e ) {
  e.onclick = function () {
    modal.style.display = 'block';

    let jobid = e.href.substring( e.href.indexOf( '#' ) + 1, e.href.length );

    posts.appendModalData( jobid );
    likes.appendModalData( jobid );
    checkLikes( currentuserArr.id );
  };
} );

window.onclick = function ( event ) {
  if ( event.target === modal ) {
    modal.style.display = 'none';
  }
};
// Get the <span> element that closes the modal
document
  .getElementsByClassName( 'close' )[0]
  .addEventListener( 'click', hideModal );


//#endregion

//#region Company Profiles
const Companies = function ( companies ) {
  this.companies = companies;
};

Companies.prototype.addCompany = function (
  id,
  companyName,
  industry,
  imgSrc,
  website,
  phone,
  size,
  headquarters,
  type,
  founded,
  specialties,
  address
) {
  let company = new NewCompanies(
    id,
    companyName,
    industry,
    imgSrc,
    website,
    phone,
    size,
    headquarters,
    type,
    founded,
    specialties,
    address
  );
  this.companies.push( company );
};
Companies.prototype.saveToLocalStorage = function () {
  localStorage.setItem( 'companies', JSON.stringify( this.companies ) );
};
Companies.prototype.removeItem = function ( company ) {
  this.companies.splice( company, 1 );
};

const NewCompanies = function (
  id,
  companyName,
  industry,
  imgSrc,
  website,
  phone,
  size,
  headquarters,
  type,
  founded,
  specialties,
  address
) {
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
company.addCompany(
  '1',
  'Amazon',
  'Internet',
  '1.jpg',
  'http://www.amazon.com',
  '06555555',
  '10,001+ employees',
  'Seattle, WA',
  'Public Company',
  '1970',
  'e-Commerce',
  'Seattle, WA'
);
company.addCompany(
  `${generateNewID( company.companies )}`,
  'Careem',
  'Information Technology & Services',
  `${generateNewID( company.companies )}.jpg`,
  'http://www.careem.com',
  '06555555',
  '1,001-5,000 employees',
  'Dubai, UAE',
  'Privately Held',
  '2012',
  'transportation, technology, and logistics',
  'Amman, Jordan'
);
company.addCompany(
  `${generateNewID( company.companies )}`,
  'Crossover',
  'Information Technology & Services',
  `${generateNewID( company.companies )}.jpg`,
  'http://www.crossover.com',
  '06555555',
  '1,001-5,000 employees',
  'Austin, TX',
  'Privately Held',
  '2014',
  'Human Resources, Technology, Information Technology, Remote Jobs, Software Development, and Jobs',
  'Qatar, Doha'
);

function generateNewID( array ) {
  return parseInt( array[array.length - 1].id ) + 1;
}


//#endregion

//#region User Profiles
const Users = function ( users ) {
  this.users = users;
};

Users.prototype.addUser = function (
  id,
  fName,
  lName,
  email,
  phone,
  uPassword
) {
  let user = new NewUsers(
    id,
    fName,
    lName,
    email,
    phone,
    uPassword );
  this.users.push( user );
};
Users.prototype.saveToLocalStorage = function () {
  localStorage.setItem( 'users', JSON.stringify( this.users ) );
};
Users.prototype.removeItem = function ( user ) {
  this.users.splice( user, 1 );
};

const NewUsers = function (
  id,
  fName,
  lName,
  email,
  phone,
  uPassword
) {
  this.id = id;
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.phone = phone;
  this.uPassword = uPassword;
};

//initial Values
const user = new Users( [] );
user.addUser(
  '1',
  'Odeh',
  'Abuzaid',
  'odeh.abuzaid@outlook.com',
  '0787737731',
  'password' );
user.addUser(
  `${generateNewID( user.users ) }`,
  'Odeh',
  'Abuzaid',
  'odeh.abuzaid@outlook.com',
  '0787737731',
  'password' );
user.addUser(
  `${generateNewID( user.users )}`,
  'Renad',
  'Alkhlafat',
  'renadsalem8888@gmail.com',
  '0772878120',
  'password' );


//#endregion

//#region Likes :)
const Likes = function ( newLikes ) {
  this.newLikes = newLikes;
};

Likes.prototype.addLike = function (
  postID,
  userID,
  userName
) {
  let newLike = new NewLike(
    postID,
    userID,
    userName
  );
  this.newLikes.push( newLike );
};
Likes.prototype.saveToLocalStorage = function () {
  localStorage.setItem( 'likes', JSON.stringify( this.newLikes ) );
};
Likes.prototype.removeItem = function ( like ) {
  this.newLikes.splice( like, 1 );
};

Likes.prototype.appendModalData = function ( id ) {
  let count = 0;
  for ( const i of this.newLikes ) {
    if ( i.postID === id ) {
      count++;
    }
  }
  likesbtn.innerText = '  ' + count;
  likesbtn.value = id;
};

const NewLike = function (
  postID,
  userID,
  userName
) {
  this.postID = postID;
  this.userID = userID;
  this.userName = userName;
};

//initial Values
const likes = new Likes( [] );
likes.addLike( '1','1','Odeh Abuzaid' );
likes.addLike( '1','2','Odeh Abuzaid' );

likes.addLike( '2','1','Odeh Abuzaid' );
likes.addLike( '2','2','Odeh Abuzaid' );
likes.addLike( '3','1','Odeh Abuzaid' );



//#endregion

function openLoginregisterForm() {
  registrationModal.style.display = 'block';
  toggleForm();
}
function toggleForm() {
  if ( loginRegisterForm.style.display === 'block' ) {
    loginRegisterForm.style.display = 'none';
    openFormbtn.style.display = 'block';
  } else {
    loginRegisterForm.style.display = 'block';
    openFormbtn.style.display = 'none';
  }
}
function hideModal() {
  modal.style.display = 'none';
  registrationModal.style.display = 'none';
}
function accountregView ( e ){
  if ( e.target.id === 'regUserAccount' ){
    document.getElementById( 'regCompanyForm' ).style.display = 'none';
    document.getElementById( 'ReguserForm' ).style.display = 'inline';
  }else if ( e.target.id === 'regCompanyAccount' ){

    document.getElementById( 'regCompanyForm' ).style.display = 'inline';
    document.getElementById( 'ReguserForm' ).style.display = 'none';
  }
}
function regCompanyBtn( e ){
  e.preventDefault();
  let id,
    companyName,
    industry,
    imgSrc,
    website,
    phone,
    size,
    headquarters,
    type,
    founded,
    specialties,
    address;
  id = `${generateNewID( user.users )}`;
  companyName = document.getElementById( 'companyName' ).value;
  industry = document.getElementById( 'cIndustry' ).options[document.getElementById( 'cIndustry' ).selectedIndex].value;
  imgSrc = 'default.jpg';
  website = document.getElementById( 'cWebsite' ).value;
  phone = document.getElementById( 'cPhone' ).value;
  size = document.getElementById( 'cSize' ).options[document.getElementById( 'cSize' ).selectedIndex].value;
  headquarters = document.getElementById( 'cCity' ).value;
  type = document.getElementById( 'cType' ).options[document.getElementById( 'cType' ).selectedIndex].value;
  founded = document.getElementById( 'cfoundedYear' ).value;
  specialties = document.getElementById( 'cSpecialties' ).options[document.getElementById( 'cSpecialties' ).selectedIndex].value;
  address = document.getElementById( 'cCity' ).value;

  company.addCompany( id,
    companyName,
    industry,
    imgSrc,
    website,
    phone,
    size,
    headquarters,
    type,
    founded,
    specialties,
    address );

  company.saveToLocalStorage();
  document.getElementById( 'regCompanyForm' ).reset();
}
function regUserBtn( e ){
  e.preventDefault();
  let id,fName,lName,email,phone,uPassword ;
  id = `${generateNewID( user.users )}`;
  fName = document.getElementById( 'fName' ).value;
  lName = document.getElementById( 'lName' ).value;
  email = document.getElementById( 'email' ).value;
  phone = document.getElementById( 'phone' ).value;
  uPassword = document.getElementById( 'uPassword' ).value;
  user.addUser( id,fName,lName,email,phone,uPassword );
  user.saveToLocalStorage();
  document.getElementById( 'ReguserForm' ).reset();
  registrationModal.style.display = 'none';
}
function acclogin( e ){
  e.preventDefault();
  let accountEmail = document.getElementById( 'accountEmail' ).value;
  let accountPassword = document.getElementById( 'accountPassword' ).value;
  for ( const i in user.users ) {
    if ( accountEmail === user.users[i].email && accountPassword === user.users[i].uPassword ){
      localStorage.setItem( 'CURRENT_USER', JSON.stringify( user.users[i] ) );
      window.location = './index.html';

    }
  }
}
function acclogOut( e ){
  e.preventDefault();
  localStorage.removeItem( 'CURRENT_USER' );
  window.location = './index.html';
}
const currentuserArr = JSON.parse( localStorage.getItem( 'CURRENT_USER' ) ) || [];
function getUserData( data ){

  if ( data === 'name' ){
    return ( currentuserArr.fName + ' ' + currentuserArr.lName ).toLowerCase() ;
  }
}
function loadPage(){
  if( localStorage.getItem( 'users' ) && localStorage.getItem( 'companies' ) && localStorage.getItem( 'posts' ) ){
    loadfromLocalStorage();
  }else{
    user.saveToLocalStorage();
    company.saveToLocalStorage();
    posts.saveToLocalStorage();
    likes.saveToLocalStorage();

  }
}
function loadfromLocalStorage(){
  const usersArr = JSON.parse( localStorage.getItem( 'users' ) ) || [];
  const companiesArr = JSON.parse( localStorage.getItem( 'companies' ) ) || [];
  const postsArr = JSON.parse( localStorage.getItem( 'posts' ) ) || [];
  const likesArr = JSON.parse( localStorage.getItem( 'likes' ) ) || [];

  user.users = [];
  for ( let i = 0 ; i < usersArr.length ;i++ ) {
    user.addUser( usersArr[i].id,
      usersArr[i].fName,
      usersArr[i].lName,
      usersArr[i].email,
      usersArr[i].phone,
      usersArr[i].uPassword );
  }
  company.companies = [];
  for ( let i = 0 ; i < companiesArr.length ;i++ ) {
    company.addCompany( companiesArr[i].id,
      companiesArr[i]. companyName,
      companiesArr[i].industry,
      companiesArr[i].imgSrc,
      companiesArr[i].website,
      companiesArr[i].phone,
      companiesArr[i].size,
      companiesArr[i].headquarters,
      companiesArr[i].type,
      companiesArr[i].founded,
      companiesArr[i].specialties,
      companiesArr[i].address );
  }
  posts.newPosts = [];
  for ( let i = 0 ; i < postsArr.length ;i++ ) {
    posts.addPost( postsArr[i].id,
      postsArr[i].companyID,
      postsArr[i].jobTitle,
      postsArr[i].jobDescription,
      postsArr[i].jobCategory,
      postsArr[i].jobShift,
      postsArr[i].payRate,
      postsArr[i].companySrc );
  }
  likes.newLikes = [];
  for ( let i = 0 ; i < likesArr.length ;i++ ) {
    likes.addLike( likesArr[i].postID,
      likesArr[i].userID,
      likesArr[i].userName
    );
  }

}
function checkLoginStatus(){
  if ( localStorage.getItem( 'CURRENT_USER' ) ){
    document.getElementById( 'loginReg' ).style.display = 'none';
    document.getElementById( 'loggedIn' ).style.display = 'inline';
    let userNameLbl = document.getElementById( 'userNameLbl' );
    userNameLbl.textContent = getUserData( 'name' );
    return true;
  }else{
    document.getElementById( 'loginReg' ).style.display = 'block';
    document.getElementById( 'loggedIn' ).style.display = 'none';
    return false;}
}

function likeBtnClicked(){
  if ( checkLoginStatus() ){
    console.log( checkLikes( currentuserArr.id )[0] );
    let liked = checkLikes( currentuserArr.id )[0];
    if ( liked ) {
      likes.removeItem( checkLikes( currentuserArr.id )[1] );
      likes.appendModalData( likesbtn.value );
      likes.saveToLocalStorage();
    }else{
      likes.addLike( likesbtn.value ,currentuserArr.id,currentuserArr.fName + ' ' + currentuserArr.lName );
      likes.appendModalData( likesbtn.value );
      likes.saveToLocalStorage();
    }
  }else
  { loginRegisterForm.style.display = 'block';}
  checkLikes( currentuserArr.id );
}
function checkLikes( id ){
  for ( let i = 0 ; i < likes.newLikes.length ; i++ ) {
    console.log( likes.newLikes[i].userID + likes.newLikes[i].postID );
    console.log( currentuserArr.id + id );
    if ( likes.newLikes[i].userID === currentuserArr.id && likes.newLikes[i].postID === id ){
      likesbtn.style.color = '#0798CF';
      return [true,likes.newLikes.indexOf( likes.newLikes[i] )];
    }else {
      likesbtn.style.color = '#000';
      return [false,'NA'];
    }
  }}

checkLoginStatus();
loadPage();

