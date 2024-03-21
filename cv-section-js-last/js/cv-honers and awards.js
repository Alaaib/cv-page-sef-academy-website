let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")
var awards = {}
var x={}
var output=[]
const forms = document.querySelectorAll('form');
const form = forms[0];
var ctForAdd= document.querySelector(".waay")
var addicon= document.querySelector(".add-icon")
var allRemoveIcons= document.querySelectorAll(".remove-icon")

allRemoveIcons.forEach(function(item){
    item.addEventListener("click", function(r){
        this.previousElementSibling.outerHTML=""
        item.remove()
    })

})
/////////////////////////////////
addicon.addEventListener("click",function(){
let d= document.createElement("div")
d.innerHTML= `
<div>
<br><br><br>
<div>
<form class="cv-form row g-2 cv-form-rounded">
<div class="col-12 col-md-8   form-control-ct">
    <label for="award name" class="form-label">Award name</label>
    <input type="text" class="form-control awardName" id="awardName" name="Award name"  value=""></div>

    <div class="col-12 col-md-4 form-control-ct">
    <label for="award-year" class="form-label"> Year</label>
    <input type="text" class="form-control awardYear" id="awardYear" name="Year" value=""></div>

<div class="col-12  form-control-ct">
    <label for="award description" class="form-label">Description</label>
    <textarea class="form-control cv-summary-about awardDescription text-area" name="Description" id="awardDescription" name="about" rows="5" ></textarea>
    </div>
       
    <!-- <button type="submit"  id="cvContinueBtn">Continue</button>    -->
</form>
<!-- <div class="icons-div"> -->
   
              </div>

<!-- </div> -->
<i type="button" class="fa-regular fa-trash-can remove-icon remove-icon-move " style="color: #bf9b30;"></i>



</div>



`
ctForAdd.appendChild(d)
///////////////////////////////
var allRemoveIcons= document.querySelectorAll(".remove-icon")
allRemoveIcons.forEach(function(item){
item.addEventListener("click", function(r){
this.parentNode.outerHTML=""
item.remove()
})
})
})
///////////////////////////////////////////
//////////////////////////////////////////
/////////////////////////////////////////
continueBtn.addEventListener("click", function(e){
    e.preventDefault()
    window.location="cv-hobbies and interests.html"
    forms.forEach(form => {
    for(i=0; i<form.length; i++){
    awards[form[i].name]= form[i].value
    }
        output.push(awards);
    })
    localStorage.setItem("honers and awards",JSON.stringify(output));
    })
    ////////////////////////////////////
    backBtn.addEventListener("click", function(){
        window.location="cv-education.html"
    })