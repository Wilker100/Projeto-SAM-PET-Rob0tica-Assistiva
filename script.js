var slider = document.getElementById("servoSlider");
    var servoP = document.getElementById("servoPos");
    servoP.innerHTML = slider.value;
    slider.oninput = function() {
      slider.value = this.value;
      servoP.innerHTML = this.value;
    }

    var sliderD = document.getElementById("delaySlider");
    var servoD = document.getElementById("servoDelay");
    servoD.innerHTML = sliderD.value;
    sliderD.oninput = function() {
      sliderD.value = this.value;
      servoD.innerHTML = this.value;
    }

    var data = 0;
  
    //printing default value of data that is 0 in h2 tag
    document.getElementById("counting").innerText = data;
      
    //creation of increment function
    function increment() {
        data = data + 1;
        document.getElementById("counting").innerText = data;
    }
    //creation of decrement function
    function decrement() {
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }
    if(data < 0){
      data = 0;
      document.getElementById("counting").innerText = data;
    }

    
    
    $.ajaxSetup({timeout:1000});
    function servo(pos) {
      $.get("/?value=" + pos + "&");
      {Connection: close};
    }
    
    
