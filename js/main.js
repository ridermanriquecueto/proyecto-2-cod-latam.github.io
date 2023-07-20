

const menuprincipal = document.querySelectorAll('.menu-item');

menuprincipal.forEach(function(item){
     item.addEventListener('click', function(e){
         const actualItem = document.querySelector('.active'); 
         actualItem.classList.remove('active'); 
         e.target.classList.add('active'); 
     });
 });

 const menuprincipal2 = document.querySelectorAll('.menu-item');

 menuprincipal2.forEach(function(item){
     item.addEventListener('mouseover', function(e){
         const actualItem = document.querySelector('.active'); 
         actualItem.classList.remove('mouseoverboton'); 
         e.target.classList.add('mouseoverboton'); 
      });
  });
 

  const menuprincipal3 = document.querySelectorAll('.menu-item');

 menuprincipal3.forEach(function(item){
     item.addEventListener('mouseover', function(e){
         const actualItem = document.querySelector('.active'); 
         actualItem.classList.remove('mouseoverboton'); 
         e.target.classList.add('mouseoverboton'); 
      });
  });
 
 
  


 