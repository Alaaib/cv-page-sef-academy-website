
let backBtn= document.querySelector("#backBtn")
let continueBtn= document.querySelector("#continueBtn")


var summary=[]
let inputAbout=document.querySelector("#inputAbout")
continueBtn.addEventListener("click", function(e){
    var x = {};
    x.about=  inputAbout.value
    e.preventDefault()
    summary.push(x)
        setTimeout( ()=>{
            window.location="cv-skills.html"} ,100)
            localStorage.setItem("summary", JSON.stringify(summary));
    console.log(localStorage.getItem("summary"))

    })
backBtn.addEventListener("click", function(){
        window.location="cv-main-info.html"
 })
  