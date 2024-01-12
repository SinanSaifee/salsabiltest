// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault(); // Prevent right-click context menu
//   return false;
// });

// document.addEventListener('keydown', function (e) {
//   e.preventDefault();
//   return false
// });
//clear cart
// JavaScript code to handle the button click


//preloder
var loader = document.getElementById('preloader');

window.addEventListener("load", function(){
  loader.style.display = 'none';
})


//to top window scroller
var scrollerBtn = document.getElementById('scroller-top');
window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;
 // Check if the window is scrolled down to 55px
  if(window.innerWidth > 930){
    if (scrollY >= 150) {
      scrollerBtn.style.bottom = '13px';
  } else {
       scrollerBtn.style.bottom = '-50px';
  }
  }
  else{
    if (scrollY >= 150) {
      scrollerBtn.style.bottom = '60px';
  } else {
       scrollerBtn.style.bottom = '-50px';
  }
  }
});
scrollerBtn.addEventListener('click', function() {
  window.scrollTo(0, 0);
});


//sticky header script
window.addEventListener('scroll', function() {
  var container = document.getElementById('container');
  var navbar = document.getElementById('navbar');
  var scrollY = window.scrollY;

  // Check if the window is scrolled down to 55px
  if (scrollY >= 150) {
    container.style.position = 'sticky';
   

  } else {
    container.style.position = 'static';
   
  }
});


// //js for cart icon
// function changeImageSource() {
//     var imageElement = document.getElementById('cart-icon');
    
//     if (window.innerWidth <= 810) {
//       imageElement.src = 'image/cartlogo3.png';
//     } else {
      
//       imageElement.src = 'image/cartlogo2.png'; 
//     }
//   }
  
//   window.addEventListener('resize', changeImageSource);
//   changeImageSource();
  
// js for add cart msg
var msgContainer = document.getElementById('succesful-message-container');

function showitemadded(){
  msgContainer.style.display = "flex";
 }
 function closesuccesfulmsg(){
  msgContainer.style.display = "none";
 }

 


// product gallery js
function changeMainImage(newImageSrc) {
  var mainImg = document.getElementById('main-Image');
  event.target.style.opacity = 0.7;

  var allImages = document.querySelectorAll('img:not(#main-img)');
  allImages.forEach(function(image) {
      if (image !== event.target) {
          image.style.opacity = 1;
      }
  });
  mainImg.src = newImageSrc;
  addCartOpactity()
}




   
    


// showing item added msg
var addCartbtn = document.getElementById('add-cart');

  addCartbtn.addEventListener('click', function() {
      showitemadded()
  });

  




