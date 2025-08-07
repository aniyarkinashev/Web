   document.addEventListener('DOMContentLoaded', function() {
       const themeToggle = document.getElementById('theme-toggle');
       const currentYear = new Date().getFullYear();
       document.getElementById('current-year').textContent = currentYear;

       themeToggle.addEventListener('click', function() {
           document.body.classList.toggle('dark');
           document.header.classList.toggle('dark');
           document.footer.classList.toggle('dark');
       });
   });
   