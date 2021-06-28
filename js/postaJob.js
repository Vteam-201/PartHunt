
// company.addCompany( '     ','     ','      ','      ','     ','     ','    ' );
// posts.saveToLocalStorage();

// posts.addPost(
//   `${generateNewID( posts.newPosts )}`,
//   ,
//   ,
//   ,
//   ,
//   ,
//   ,
// );
function generateNewID( array ) {
  return parseInt( array[array.length - 1].id ) + 1;
}

let formsubmit = document.getElementById( 'submit' );
formsubmit.addEventListener( 'click', newJobposts );


function newJobposts ( ){

  let id,
    companyName,
    imgSrc,
    website,
    phone,
    size,
    headquarters,
    type,
    founded,
    specialties,
    industry;

  id = `${generateNewID( companiesArray )}`;
  companyName = document.getElementById( 'companyName' ).value;
  imgSrc = 'default.jpg';
  website = document.getElementById( 'cWebsite' ).value ;
  phone = document.getElementById( 'cPhone' ).value ;
  type = document.getElementById( 'cType' ).options[document.getElementById( 'cSize' ).selectedIndex].value;
  size = document.getElementById( 'cSize' ).options[document.getElementById( 'cSize' ).selectedIndex].value;
  founded = document.getElementById( 'cfoundedYear' ).value;
  industry = document.getElementById( 'cIndustry' ).options[document.getElementById( 'cIndustry' ).selectedIndex].value;
  specialties = document.getElementById( 'cSpecialties' ).options[document.getElementById( 'cSpecialties' ).selectedIndex].value;
  headquarters = document.getElementById( 'cCity' ).value;

  company.addCompany( id,
    companyName,
    imgSrc,
    website,
    phone,
    size,
    headquarters,
    type,
    founded,
    specialties,
    industry );

  company.saveToLocalStorage();
  document.getElementById( 'regCompanyForm' );

  let pid,
    companyID,
    jobTitle,
    jobDescription,
    jobCategory,
    jobShift,
    payRate,
    companySrc;

  pid = `${generateNewID( user.users )}`;
  companyID = document.getElementById( 'companyName' ).value;
  jobTitle = document.getElementById( 'Jobtitle' ).value;
  jobDescription = document.getElementById( 'JobDescription' ).value;
  jobCategory = document.getElementById( 'Category' ).options[document.getElementById( 'Category' ).selectedIndex].value;
  jobShift = document.getElementById( 'JobShift' ).options[document.getElementById( 'JobShift' ).selectedIndex].value;
  payRate = document.getElementById( 'PayRate' ).options[document.getElementById( 'PayRate' ).selectedIndex].value;
  companySrc = 'default.jpg';


  posts.addPost (
    pid,
    companyID,
    jobTitle,
    jobDescription,
    jobCategory,
    jobShift,
    payRate,
    companySrc );
  posts.saveToLocalStorage();
}



