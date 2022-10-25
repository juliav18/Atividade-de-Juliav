'use strict' ;

const switcher = document.querySelector('.btn') ;

switcher.addEventListener('click', function() {
   document.body.classList.toggle('light-theme');
   document.body.classList.toggle('dark-theme');
    
   const ClassName = document.body.ClassName;
   if(ClassName == "light-theme") {
      this.textContent = "Dark" ;
   } else {
    this.textContent = "Enter" ;
   } 
   console.log('current class name: ' + ClassName);
});