'use strict';
// let file = document.getElementById( 'companypicture' );
// let btn = document.getElementById( 'submitForm' );
// btn.addEventListener( 'submit',logit );
// function logit( e ){
//   e.preventDefault();
//   console.log( ( document.getElementById( 'companypicture' ).files[0].nanme ) );
// }
let id, companySrc, pid, jobCategory, jobDescription, jobShift, jobTitle, payRate;
let address, companyName, founded, headquarters, imgSrc, industry, phone, size, specialties, type, website;
let submitaformPost = document.getElementById('form');
submitaformPost.addEventListener('submit', newJobposts);
function newJobposts(e) {
  e.preventDefault();
  // console.log( e.target.Jobtitle.value );
  companySrc = '../res/' + e.target.companypicture.files[0].name;
  pid = `${generateNewID(posts.newPosts)} `;
  jobCategory = e.target.jc.options[e.target.jc.selectedIndex].value;
  jobDescription = e.target.JobDescription.value;
  jobShift = e.target.Jobshift.options[e.target.Jobshift.selectedIndex].value;
  jobTitle = e.target.Jobtitle.value;
  payRate = e.target.payR.value;
  address = e.target.cCity.options[e.target.cCity.selectedIndex].value;
  companyName = e.target.companyName.value;
  founded = e.target.cfoundedYear.value;
  headquarters = e.target.cCity.options[e.target.cCity.selectedIndex].value;
  id = `${generateNewID(company.companies)}`;
  imgSrc = companySrc;
  industry = e.target.cIndustry.options[e.target.cIndustry.selectedIndex].value;
  phone = e.target.cPhone.value;
  size = e.target.cSize.options[e.target.cSize.selectedIndex].value;
  specialties = e.target.cSpecialties.options[e.target.cSpecialties.selectedIndex].value;
  type = e.target.cType.options[e.target.cType.selectedIndex].value;
  website = e.target.cWebsite.value;
  posts.addPost(pid, id, jobTitle, jobDescription, jobCategory, jobShift, payRate, companySrc);
  posts.saveToLocalStorage();
  company.addCompany(id, companyName, industry, imgSrc, website, phone, size, headquarters, type, founded, specialties, address);
  company.saveToLocalStorage();
  submitaformPost.reset();
  Swal.fire({
    title: 'done!',
    text: 'Your post submitted successfully!',
    type: 'success'
  }).then(function () {
    location.href = '../index.html';
  });
}


function loadfromLocalStorage() {
  let comaniesdata = JSON.parse(localStorage.getItem('companies')) || [];
  if (comaniesdata) {
    company.companies = [];
    for (let i = 0; i < comaniesdata.length; i++) {
      company.addCompany(comaniesdata[i].id, comaniesdata[i].companyName, comaniesdata[i].industry, comaniesdata[i].imgSrc, comaniesdata[i].website, comaniesdata[i].phone,
        comaniesdata[i].size, comaniesdata[i].headquarters, comaniesdata[i].type, comaniesdata[i].founded, comaniesdata[i].specialties, comaniesdata[i].address);













    }
  }
  let postsArr = JSON.parse(localStorage.getItem('posts')) || [];
  if (postsArr) {
    posts.newPosts = [];
    for (let i = 0; i < postsArr.length; i++) {
      posts.addPost(postsArr[i].id, postsArr[i].companyID, postsArr[i].jobTitle, postsArr[i].jobDescription, postsArr[i].jobCategory, postsArr[i].jobShift,

        postsArr[i].payRate, postsArr[i].companySrc);
    }
  }









}
function generateNewID(array) {
  return parseInt(array.length + 1);
}
loadfromLocalStorage();
