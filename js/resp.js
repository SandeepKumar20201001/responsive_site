burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})



// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());


// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    event.preventDefault();
  }
});
