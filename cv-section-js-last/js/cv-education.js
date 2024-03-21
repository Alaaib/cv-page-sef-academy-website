let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
var ctForAdd= document.querySelector(".waay")
var education = {}
const forms = document.querySelectorAll('form');
const form = forms[0];
var addicon= document.querySelector(".add-icon")
var allRemoveIcons= document.querySelectorAll(".remove-icon")
var output=[]

allRemoveIcons.forEach(function(item){
item.addEventListener("click", function(){
this.previousElementSibling.outerHTML=""
item.remove()
})
})
///////////////////////////////////
addicon.addEventListener("click",function(){
let d= document.createElement("div")
d.innerHTML= `
   <div>
   <br> <br><br>

   <form class=" row g-2 rounded cv-form-rounded">

            <div class="col-12   form-control-ct">
                <label for="Organization name" class="form-label">Organization name</label>
                <input type="text" class="form-control OrganizationName" id="OrganizationName" name="Organization name" value=""></div>
          
                <div class="col-12  form-control-ct">
                <label for="Organization position" class="form-label">Degree</label>
                <input type="text" class="form-control OrganizationPosition" id="OrganizationPosition" name="Position"  value=""></div>
    
            <div class="col-12 col-md-6 form-control-ct">
                <label for="from" class="form-label">from</label>
                <input type="text" class="form-control OrganizationFrom" id="OrganizationFrom" name="From"  value=""></div>
         
            <div class="col-12 col-md-6 form-control-ct">
                <label for="to" class="form-label">To</label>
                <input type="text" class="form-control OrganizationTo" id="OrganizationTo" name="To" value=""></div>

            <div class="col-12  order-first order-md-last form-control-ct">
                <label for="description" class="form-label">Organization description</label>
                <textarea class="form-control order-last cv-summary-about OrganizationDescription text-area" id="OrganizationDescription" name="about" rows="5" ></textarea>
                </div>
                
</form>
<!-- <div class="icons-div"> -->
<i type="button" class="fa-regular fa-trash-can remove-icon remove-icon-move " style="color: #bf9b30;"></i>

<!-- </div> -->
</div>

`
ctForAdd.appendChild(d)
//////////////////////////////
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
item.addEventListener("click", function(r){
this.parentNode.outerHTML=""
item.remove()
})
})
})
///////////////////////////////
//////////////////////////////
/////////////////////////////
continueBtn.addEventListener("click", function(e){
    e.preventDefault()
    window.location="cv-honers-and-awards.html"
    forms.forEach(form => {
    for(i=0; i<form.length; i++){
    education[form[i].name]= form[i].value
    }
        output.push(education);
    })
    localStorage.setItem("education",JSON.stringify(output));
    })
///////////////////////////////
//////////////////////////////
/////////////////////////////
    backBtn.addEventListener("click", function(){
        window.location="cv-experience.html"
    })