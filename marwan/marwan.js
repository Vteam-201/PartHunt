'user strict';

let formsubmit = document.getElementById( 'submit' );
formsubmit.addEventListener( 'click', newJobposts );

let pid = `${generateNewID( posts.newPosts ) } `;
let jobTitle = document.getElementById( 'Jobtitle' ).value;
let jobDescription = document.getElementById( 'JobDescription' ).value;
let jobCategory = document.getElementById( 'jc' ).options[document.getElementById( 'jc' ).selectedIndex].value;
let jobShift = document.getElementById( 'Jobshift' ).options[document.getElementById( 'Jobshift' ).selectedIndex].value;
let payRate = document.getElementById( 'payR' ).value;
let companySrc = 'default.jpg';
let (id = `${generateNewID(company.companies)}`;
companyName = document.getElementById('companyName').value;
industry = document.getElementById('cIndustry').options[document.getElementById('cIndustry').selectedIndex].value;
imgSrc = 'default.jpg';
website = document.getElementById('cWebsite').value;
phone = document.getElementById('cPhone').value;
size = document.getElementById('cSize').options[document.getElementById('cSize').selectedIndex].value;
headquarters = document.getElementById('cCity').value;
type = document.getElementById('cType').options[document.getElementById('cType').selectedIndex].value;
founded = document.getElementById('cfoundedYear').value;
specialties = document.getElementById('cSpecialties').options[document.getElementById('cSpecialties').selectedIndex].value;
address = document.getElementById('cCity').value;);


function newJobposts (e){

  posts.addPost ( pid, id, jobTitle, jobDescription, jobShift, jobCategory, payRate, companySrc );
  

  companies.addCompany(id, companyName, industry, imgSrc, website, phone, size, headquarters, type, founded, specialties, address);

} 


function loadfromLocalStorage(){
  let comaniesdata =  JSON.parse( localStorage.getItem( 'companies' ) ) || [];

  if( comaniesdata ){
    company.companies = [];
    for ( let i = 0 ; i < comaniesdata.length ;i++ ) {
      company.addCompany( comaniesdata[i].id,
        comaniesdata[i]. companyName,
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





  
  posts.saveToLocalStorage();


  function generateNewID( array ) {
    return parseInt( array[array.length - 1].id ) + 1;
  }newJobposts ();
  

  company.saveToLocalStorage();