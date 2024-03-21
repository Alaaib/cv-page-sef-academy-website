let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
var experience = {}
const forms = document.querySelectorAll('form');
const form = forms[0];
var output=[]
var ctForAdd= document.querySelector(".waay")
///////////////////////////////////////////

var addicon= document.querySelector(".add-icon")
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
    this.previousElementSibling.outerHTML=""
    item.remove()
})
})
///////////////////////////////////////////
addicon.addEventListener("click",function(){
let d= document.createElement("div")
d.innerHTML= `
   <div>
   <br> <br><br>
   
   <form class="   rounded cv-form-rounded">
   <div class="row g-2">
                   <div class="col-12   form-control-ct">
                       <label for="company name" class="form-label">Company name</label>
                       <input type="text" class="form-control companyName" id="companyName" name="Company name" value=""></div>
                 
                       <div class="col-12  form-control-ct">
                       <label for="company position" class="form-label">Position</label>
                       <input type="text" class="form-control companyPosition" id="companyPosition" name="companyPosition" value=""></div>
           
                   <div class="col-12 col-md-6 form-control-ct">
                       <label for="from" class="form-label">from</label>
                       <input type="text" class="form-control companyFrom" id="companyFrom" name="From"  value=""></div>
                
                   <div class="col-12 col-md-6 form-control-ct">
                       <label for="to" class="form-label">To</label>
                       <input type="text" class="form-control companyTo" id="companyTo" name="To" value=""></div>
                   </div>
                       <div class="row g-2 logo-and-des">
   
                           <div class="col-12 col-md-4 form-control-ct order-last order-md-first company-logo ">
                               <label for="to" class="form-label">Company logo</label>
           
                               <div class="experience-org-logo rounded">
           
                              </div></div>
                       <div class="col-12 col-md-8 order-first order-md-last form-control-ct">
                           <label for="description" class="form-label">company description</label>
                           <textarea class="form-control order-last cv-summary-about companyDescription text-area" id="companyDescription" name="about" rows="6" ></textarea>
                           </div>
                       </div>
                           
           
           <!-- <button type
           ="submit"  id="cvContinueBtn">Continue</button>    -->
   </form>
<!-- <div class="icons-div"> -->
<i type="button" class="fa-regular fa-trash-can remove-icon remove-icon-move " style="color: #bf9b30;"></i>

<!-- </div> -->
</div>

`
ctForAdd.appendChild(d)
////////////////////////////////////
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
    this.parentNode.outerHTML=""
    item.remove()
})
})
})

///////////////////////////////////////////
backBtn.addEventListener("click", function(){
    window.location="cv-skills.html"
})
///////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
continueBtn.addEventListener("click", function(e){
e.preventDefault()
window.location="cv-education.html"
forms.forEach(form => {
for(i=0; i<form.length; i++){
experience[form[i].name]= form[i].value
}
    output.push(experience);
})
localStorage.setItem("experience",JSON.stringify(output));
})
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
