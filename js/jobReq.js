'use strict';
let userName = document.getElementById( 'reqName' );
let phone = document.getElementById( 'rPhone' );
let email = document.getElementById( 'rEmail' );
let reqJob = document.getElementById( 'reqjob' );
let Specialties = document.getElementById( 'rSpecialties' ).options[document.getElementById( 'rSpecialties' ).selectedIndex].value;
let shiftRe = document.getElementById( 'shiftReq' ).options[document.getElementById( 'shiftReq' ).selectedIndex].value;
let education = document.getElementById( 'EDUCATION' ).options[document.getElementById( 'EDUCATION' ).selectedIndex].value;
let expSalary = document.getElementById( 'expectedSalary' ).options[document.getElementById( 'expectedSalary' ).selectedIndex].value;
let alljobs=[];
function Reqjob(userName, phone,email,reqJob,Specialties,shiftRe,education,expSalary) {
    this.userName = userName;
    this.phone = phone;
    this.email = email;
    this.reqJob = reqJob;
    this.Specialties = Specialties;
    this.shiftRe = shiftRe;
    this.education = education;
    this.expSalary = expSalary;
Reqjob.alljobs.push(this);

}
let post = document.getElementById( 'post' );
post.addEventListener( 'post' , handleSubmit );

function handleSubmit (event){
event.preventDefault();
const jobb = event.target;
const userName =jobb.userName.value;
const phone =jobb.phone.value;
const email =jobb.email.value;
const reqJob =jobb.reqJob.value;
const Specialties =jobb.Specialties.value;
const shiftRe =jobb.shiftRe.value;
const education =jobb.education.value;
const expSalary =jobb.expSalary.value;
new Reqjob(userName, phone,email,reqJob,Specialties,shiftRe,education,expSalary);

localStorage.setItem('jobRequest',JOSN.stringify(alljobs));

}



function saveToLocal(alljobs){
    localStorage.setItem('jobRequest',JOSN.stringify(alljobs));
}
function getFromLocal(){
    let data = JSON.parse( localStorage.getItem( 'jobRequest' ) ) || [];
    if(data){
       for (let i in data ){
        new Reqjob(i.userName, phone,email,reqJob,Specialties,shiftRe,education,expSalary);
       }
        
        }
      }



      saveToLocal(alljobs);

getFromLocal();