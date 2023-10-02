var countDownDate = new Date("Mar 25, 2023 24:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (days.toString().length <= 1){
        document.getElementById('days').innerHTML = '0'+ days;
        document.getElementById('days1').innerHTML = '0'+ days;
      }
      else{   
        document.getElementById('days').innerHTML = days;
        document.getElementById('days1').innerHTML =  days;
      }

      if (hours.toString().length<=1){
        document.getElementById('hours').innerHTML = '0'+ hours;
        document.getElementById('hours1').innerHTML = '0'+ hours;
      }
      else{   
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('hours1').innerHTML = hours;
      }

      if (minutes.toString().length<=1){
        document.getElementById('minutes').innerHTML = '0'+ minutes;
        document.getElementById('minutes1').innerHTML = '0'+ minutes;
      }
      else{   
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('minutes1').innerHTML = minutes;
      }

      if (seconds.toString().length<=1){
        document.getElementById('seconds').innerHTML = '0'+ seconds;
        document.getElementById('seconds1').innerHTML = '0'+ seconds;
      }
      else{   
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('seconds1').innerHTML = seconds;
      }
      
      
      
   
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);