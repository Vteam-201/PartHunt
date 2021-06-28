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
  let userNameLbl = document.getElementById( 'userNameLbl' );
  userNameLbl.textContent = currentuserArr.fName + ' ' + currentuserArr.lName;
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


