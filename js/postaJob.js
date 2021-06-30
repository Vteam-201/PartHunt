'user strict';

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

let formsubmit = document.getElementById( 'submit' );
formsubmit.addEventListener( 'click', newJobposts );
function newJobposts ( ){
  posts.addPost ( pid, id, jobTitle, jobDescription, jobShift, jobCategory, payRate, companySrc );
  posts.saveToLocalStorage();


  company.addCompany( id, industry, imgSrc, website, phone, size );

  company.saveToLocalStorage();

  // location.href = '../index.html';
}
function generateNewID( array ) {
  return parseInt( array[array.length - 1].id ) + 1;
}


function loadfromLocalStorage(){
  let comaniesdata =  JSON.parse( localStorage.getItem( 'companies' ) ) || [];

  if( comaniesdata ){
    company.companies = [];
    for ( let i = 0 ; i < comaniesdata.length ;i++ ) {
      company.addCompany( comaniesdata[i].id,
        comaniesdata[i]. dataName,
        comaniesdata[i].industry,
        comaniesdata[i].imgSrc,
        comaniesdata[i].website,
        comaniesdata[i].phone,
        comaniesdata[i].size );
    }
  }


  let postsArr =  JSON.parse( localStorage.getItem( 'posts' ) ) || [];

  if( postsArr ){

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

  }



}

loadfromLocalStorage();
