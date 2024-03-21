let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
let inputHobbies=document.querySelector(".inputHobbies")
let hobbiesInputCt= document.querySelector("#hobbiesInputCt")
backBtn.addEventListener("click", function(){
    window.location="cv-honers-and-awards.html"
})


var hobbies = []
var x={}
const forms = document.querySelectorAll('form');
const form = forms[0];
continueBtn.addEventListener("click", function(e){
    window.location="cv-links.html"
    e.preventDefault()
    for(i=0; i<form.length; i++){
        x[i+1]= form[i].value}
        hobbies.push(x)
localStorage.setItem("hobbies and interests",JSON.stringify(hobbies))
})

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
<div class="row hobbies-input-div">
<div class="col-10 hobbies-input-formcontrol">
<input type="text" class="form-control inputHobbies text-area" id="inputhobbies1" name="hobbies" value="">
</div>

<div class=" col-1 hobbies-input-remove remove-ct">
<i class="fa-regular fa-trash-can remove-icon " style="color: #bf9b30;"></i>
</div>
</div>
`
 hobbiesInputCt.append(d)

    var allRemoveIcons= document.querySelectorAll(".remove-icon")
    allRemoveIcons.forEach(function(item){
        item.addEventListener("click", function(r){
            this.parentNode.parentNode.outerHTML=""
            
            item.remove()
        })
    })
    })


  