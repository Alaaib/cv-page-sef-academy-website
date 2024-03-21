let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
let inputSkills=document.querySelector(".inputSkills")
backBtn.addEventListener("click", function(){
    window.location="cv-summary.html"
})


var x = { 
   }
   var skills=[]
   const forms = document.querySelectorAll('form');
   const form = forms[0];
continueBtn.addEventListener("click", function(e){
window.location="cv-experience.html"  
  e.preventDefault()
//     const values = {};
// document.querySelectorAll("input").forEach(element => values.skill= element.value);

// console.log(values);      

// Array.from(form.elements).forEach((input) => {
    for(i=0; i<form.length; i++){
    x[i+1]= form[i].value}
    skills.push(x)
console.log(skills)

localStorage.setItem("skills",JSON.stringify(skills))
// })
//    var obj={}
  
// Object.keys(skills).forEach(function(key) {
// })
// var obj ={
//     ...skills
//    }
//    console.log(obj)
// obj={
//     ...skills
// }

// localStorage.setItem("skills",JSON.stringify(skills))
// console.log(localStorage.getItem("skills"))

// var input= document.querySelectorAll("input")
})

var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
        this.parentNode.parentNode.outerHTML=""
        // remove(this.parentElement)
    })
})

var addicon= document.querySelector(".add-icon")

addicon.addEventListener("click",function(){

let skillsInputCT= document.querySelector(".skills-input-ct")
var addicon= document.querySelector(".add-icon")

let d= document.createElement("div")

d.innerHTML= `
<div class="skills-input-div">
                <div class="skills-input-formcontrol">
                <input type="text" class="form-control inputSkills" name="cvKey" id="inputSkills1" name="skills" value="">
                </div>
               
                <div class="skills-input-remove remove-ct">
                <i class="fa-regular fa-trash-can remove-icon " style="color: #bf9b30;"></i>
                </div>
    </div>

` 

skillsInputCT.appendChild(d)
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
        this.parentNode.parentNode.outerHTML=""
        // remove(this.parentElement)
        item.remove()
    })
})
})



