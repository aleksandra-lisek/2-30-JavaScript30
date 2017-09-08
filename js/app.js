document.addEventListener("DOMContentLoaded", function() {

    function clock() {
       const date = new Date();
       const seconds = date.getSeconds();
       const minutes = date.getMinutes();
       const hours = date.getHours();
    //    const day = date.getDate();
    const hh = document.querySelector('.hours-container');
    const mm = document.querySelector('.minutes-container');
    const ss = document.querySelector('.seconds-container');

        const secAngle = seconds * 6;
        const minAngle = minutes * 6 + seconds * (360/3600);
        const hourAngle = hours * 30 + minutes * (360/720);

   ss.style.transform = `rotate(${secAngle}deg)`;
   mm.style.transform = `rotate(${minAngle}deg)`;
   hh.style.transform = `rotate(${hourAngle}deg)`;
   // $('.date').text(day);
}

setInterval(clock, 100);



});
