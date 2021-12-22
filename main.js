const navSlide = () => {
    const burger= document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');

    
    //toggle nav 
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');


   //animate links
   navLinks.forEach((link, index)=>{
    
        link.style.animation='navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    
    
    });
     //burger animation
     burger.classList.toggle('toggle');
 });
 
}
 navSlide();


 const slide = () =>{
const signinBtn=document.querySelector('.signinBtn');
const signupBtn=document.querySelector('.signupBtn');
const formBx=document.querySelector('.formBx');
const login_register=document.querySelector('.login_register');

signupBtn.onclick=function(){
    formBx.classList.add('active');
    login_register.classList.add('active');
}
signinBtn.onclick=function(){
    formBx.classList.remove('active');
    login_register.classList.remove('active');
 }
}

slide();