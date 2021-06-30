// 'user strict';

// let id,companySrc,pid,jobCategory,jobDescription,jobShift,jobTitle,payRate;


// let address, companyName,founded,headquarters, imgSrc ,industry, phone, size, specialties , type,website ;

let regCompanyForm = document.getElementById( 'regCompanyForm' );


let formsubmit = document.getElementById( 'submit' );
formsubmit.addEventListener( 'click', newJobposts );
function newJobposts ( ){

  Swal.fire( {
    position: 'top-end',
    icon: 'success',
    title: 'Your job has been submitted, thank you',
    showConfirmButton: false,
    timer: 2000

  } );
  regCompanyForm.reset();
}

// function newJobposts (  ){
//   companySrc = 'default.jpg'
//   pid = `${generateNewID( posts.newPosts ) } `
//   jobCategory = document.getElementById( 'jc' ).options[document.getElementById( 'jc' ).selectedIndex].value;
//   jobDescription = document.getElementById( 'JobDescription' ).value;
//   jobShift = document.getElementById( 'Jobshift' ).options[document.getElementById( 'Jobshift' ).selectedIndex].value;
//   jobTitle = document.getElementById( 'Jobtitle' ).value;
//   payRate = document.getElementById( 'payR' ).value;


//   address = document.getElementById( 'ctiy1' ).value;
//   companyName = document.getElementById( 'companyName' ).value;
//   founded = document.getElementById( 'cfoundedYear' ).value;
//   headquarters = document.getElementById( 'ctiy1' ).value;
//   id = `${generateNewID( company.companies )}`;
//   imgSrc = 'default.jpg';
//   industry = document.getElementById( 'cIndustry' ).options[document.getElementById( 'cIndustry' ).selectedIndex].value;
//   phone = document.getElementById( 'cPhone' ).value;
//   size = document.getElementById( 'cSize' ).options[document.getElementById( 'cSize' ).selectedIndex].value;
//   specialties = document.getElementById( 'cSpecialties' ).options[document.getElementById( 'cSpecialties' ).selectedIndex].value;
//   type = document.getElementById( 'cType' ).options[document.getElementById( 'cType' ).selectedIndex].value;
//   website = document.getElementById( 'cWebsite' ).value;


//   posts.addPost ( id,companySrc,pid,jobCategory,jobDescription,jobShift,jobTitle,payRate );
//   posts.saveToLocalStorage();

//   companies.addCompany( address, companyName,founded,headquarters,id, imgSrc ,industry, phone, size, specialties , type,website );
//   regCompanyForm.reset()
//   Swal.fire( {
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your job has been submitted, thank you',
//     showConfirmButton: false,
//     timer: 2000

//   } );
// }

// ​company.saveToLocalStorage();
// ​// location.href = '../index.html';
// ​function generateNewID( array ) {
//   return parseInt( array[array.length - 1].id ) + 1;
// }
//
//
// function loadfromLocalStorage(){
//   let comaniesdata =  JSON.parse( localStorage.getItem( 'companies' ) ) || [];
//
//   if( comaniesdata ){
//     company.companies = [];
//     for ( let i = 0 ; i < comaniesdata.length ;i++ ) {
//       company.addCompany( comaniesdata[i].address,
//         comaniesdata[i]. companyName,
//         comaniesdata[i].founded,
//         comaniesdata[i].headquarters,
//         comaniesdata[i].id,
//         comaniesdata[i].imgSrc,
//         comaniesdata[i].industry ,
//         comaniesdata[i].phone,
//         comaniesdata[i].size,
//         comaniesdata[i].specialties,
//         comaniesdata[i].type,
//         comaniesdata[i].website);
//     }
//   }
//
//
//   let postsArr =  JSON.parse( localStorage.getItem( 'posts' ) ) || [];
//
//   if( postsArr ){
//     posts.newPosts = [];
//     for ( let i = 0 ; i < postsArr.length ;i++ ) {
//       posts.addPost( postsArr[i].companyID,
//         postsArr[i].companySrc,
//         postsArr[i].id,
//         postsArr[i].jobCategory,
//         postsArr[i].jobDescription,
//         postsArr[i].jobShift,
//         postsArr[i].jobTitle,
//         postsArr[i].payRate );}}
//
//
//   loadfromLocalStorage();
// }
//
