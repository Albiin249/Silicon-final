document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const popoutMenu = document.querySelector('.popout-menu');
  
    menuToggle.addEventListener('click', function() {
      popoutMenu.classList.toggle('show');
    });
  
    // Valfritt: Klick utanför menyn för att stänga den
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !popoutMenu.contains(event.target)) {
        popoutMenu.classList.remove('show');
      }
    });
  });