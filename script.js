var typed=new Typed(".web",{
    strings:["","Web Developer","Coder","Inquisitive","Philosophile"],
    typedSpeed:90,
    BackSpeed:60,
    loop:true
});
// theme dark mode or light mode
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>
{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})