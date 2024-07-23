//for rule button to open and close
const btnrules = document.querySelector('.rule-btn');
const btnclose = document.querySelector('.close-button');
const modalrules = document.querySelector('.rule-model');
const hiddenbox= document.querySelector('.rule-btn.hidden');
const pc= document.querySelector('.winner.pc');


btnrules.addEventListener('click', () => {
    modalrules.classList.toggle('show-rule-model');
});

btnclose.addEventListener('click', () => {
    modalrules.classList.toggle('show-rule-model');
});

let me= document.querySelectorAll(".me");
let ai= document.querySelectorAll(".ai");
let user= document.querySelector(".user");
let device= document.querySelector(".device");
let winmodel= document.querySelector(".win-model");
let winner= document.querySelector(".winner");
console.log(ai);
let play= document.querySelector(".play");
let random= Math.floor(Math.random()*3);
let triangle= document.querySelector(".triangle");
//score increment for user and computer
let score= JSON.parse(localStorage.getItem('score'));
let scores= JSON.parse(localStorage.getItem('sc'));
let userscoreElem= document.getElementById('userscore')||0;
let compscoreElem= document.getElementById('compscore')||0;
if(score){
    userscoreElem.innerText=score;
}
if(scores){
    compscoreElem.innerText=scores;
}
let count=0;

me.forEach((element, index) => {
    element.addEventListener("click", () =>{
        user.style.opacity="1";
        triangle.style.display="none";
        me.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(() => {
            device.style.opacity="1";
            setTimeout(() => {
                ai[random].style.display="block";
                ai[random].classList.add("right");
            }, 700);
        }, 500);
        setTimeout(() => {
            if(index==random){
                winmodel.style.display="grid";
                winner.innerText="TIE UP";
                pc.style.display="none";
            }else if(index==1 && random==0 || index==0 && random==2 || index==2 && random==1){
                winmodel.style.display="grid";
                winner.innerText="YOU WIN";
                count=score;
                count++;
                userscoreElem.innerText=count;
                localStorage.setItem('score', JSON.stringify(count)); 
                 hiddenbox.classList.remove('hidden');    
            }else{
                winmodel.style.display="grid";
                winner.innerText="YOU LOST";
                count=scores;
                count++;
                compscoreElem.innerText=count;
                localStorage.setItem('sc', JSON.stringify(count));
            }
        }, 1500);
    })
});
play.addEventListener("click", () =>{
    window.location.reload();
})





