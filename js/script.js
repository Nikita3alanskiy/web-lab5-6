 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


 $(document).ready(function() {
   $('#openFeedbackForm').click(function() {
     $('#feedbackModal').modal('show');
   });
 });



 $(document).ready(function() {
   // Показувати/ховати кнопку в залежності від прокручування
   $(window).scroll(function() {
     if ($(this).scrollTop() > 100) {
       $('#scrollToTop').fadeIn(); // Показує кнопку після 100px прокрутки
     } else {
       $('#scrollToTop').fadeOut(); // Ховає кнопку, коли користувач на верху
     }
   });

   // Плавна прокрутка до верху при натисканні на кнопку
   $('#scrollToTop').click(function() {
     $('html, body').animate({ scrollTop: 0 }, 1000); // 1000 - час анімації в мілісекундах
   });
 });




 $(document).ready(function() {
   // Анімація карток при наведенні
   $('.card').hover(function() {
     $(this).animate({
       transform: 'scale(1.05)' // Легке збільшення картки
     }, 200); // Тривалість анімації 200 мс
   }, function() {
     $(this).animate({
       transform: 'scale(1)' // Повернення до початкового розміру
     }, 200);
   });
 });

