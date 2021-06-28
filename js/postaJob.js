'user strict';
let formsubmit = document.getElementById( 'submit' );
formsubmit.addEventListener( 'click', newJobposts );
let pid,jobTitle, jobDescription, jobCategory,jobShift, payRate,companySrc;
let id,imgSrc, website,phone,size,industry;
pid = `${generateNewID( posts.newPosts ) } `;
jobTitle = document.getElementById( 'Jobtitle' ).value;
jobDescription = document.getElementById( 'JobDescription' ).value;
jobCategory = document.getElementById( 'jc' ).options[document.getElementById( 'jc' ).selectedIndex].value;
jobShift = document.getElementById( 'Jobshift' ).options[document.getElementById( 'Jobshift' ).selectedIndex].value;
payRate = document.getElementById( 'payR' ).value;
companySrc = 'default.jpg';


id = `${generateNewID( company.companies )}`;
imgSrc = 'default.jpg';
website = document.getElementById( 'cWebsite' ).value ;
phone = document.getElementById( 'cPhone' ).value ;
size = document.getElementById( 'cSize' ).options[document.getElementById( 'cSize' ).selectedIndex].value;
industry = document.getElementById( 'cIndustry' ).options[document.getElementById( 'cIndustry' ).selectedIndex].value;


function newJobposts (){
  posts.addPost ( pid, id, jobTitle, jobDescription, jobShift, jobCategory, payRate, companySrc );
  posts.saveToLocalStorage();


  company.addCompany( id, industry, imgSrc, website, phone, size );

  company.saveToLocalStorage();

  location.href = '../index.html';
}

function generateNewID( array ) {
  return parseInt( array[array.length - 1].id ) + 1;
}


// if( data ){
//   company.companies = [];
//   for ( let i = 0 ; i < companiesArr.length ;i++ ) {
//     company.addCompany( companiesArr[i].id,
//       companiesArr[i]. companyName,
//       companiesArr[i].industry,
//       companiesArr[i].imgSrc,
//       companiesArr[i].website,
//       companiesArr[i].phone,
//       companiesArr[i].size,
//       companiesArr[i].headquarters,
//       companiesArr[i].type,
//       companiesArr[i].founded,
//       companiesArr[i].specialties,
//       companiesArr[i].address );
//   }

