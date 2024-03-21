let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
var linksInputCT= document.querySelector(".links-input-ct")

backBtn.addEventListener("click",function(e){
    window.location="cv-hobbies and interests.html"
})
///////////////
var links = []
var x={}
const forms = document.querySelectorAll('form');
const form = forms[0];
downloadBtn.addEventListener("click", function(e){
    e.preventDefault()
    for(i=0; i<form.length; i++){
        if(i%2==0){
        x[form[i].value]= form[i+1].value}}
        links.push(x)
    localStorage.setItem("links",JSON.stringify(links));


})
////////////
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
        this.parentNode.parentNode.outerHTML=""
        
    })
})

var addicon= document.querySelector(".add-icon")

addicon.addEventListener("click",function(){

let skillsInputCT= document.querySelector(".skills-input-ct")
var addicon= document.querySelector(".add-icon")

let d= document.createElement("div")
d.innerHTML= `
<div class=" container-fluid links-input-formcontrol">
                                    <div class="row g-2">
                                    <div class=" col-12 col-md-4 ">
                                 <label for="website name" >Website</label>
                <input type="text" class="form-control websiteName" name="Website" id="websiteName1"  value="">
            </div>
            <div class="col-12 col-md-7">
                <label for="website url">url</label>
                <input type="url" class="form-control websiteUrl"name="url" id="websitUrl1" value="">
                                </div>
                                 <div class=" col-12 col-md-1 links-input-remove remove-icon-to-margin remove-icon-to-margin-links">
                                 <i class="fa-regular fa-trash-can remove-icon " style="color: #bf9b30;"></i>
                                 </div>
                                 </div>

`
linksInputCT.appendChild(d)
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
        this.parentNode.parentNode.outerHTML=""
        
        item.remove()
    })
})
})
