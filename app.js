const signUpBtn = document.querySelector('.signUpBtn') ;
const closeBtn = document.querySelector('.closeBtn') ;
const module = document.querySelector('.module') ;


signUpBtn.addEventListener('click',openModule);
closeBtn.addEventListener('click',closeModule);


function openModule(){
    module.style.display = 'flex';
}
function closeModule(){
    module.style.display = 'none' ;
}