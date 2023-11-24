function time() {
  //define variables (now, hour, minute, second)
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  //hour hand
  let hourHand = document.querySelector(".hour-hand"); //this will search in the document ".hour-hand"
  var hourDegrees = ((hour % 12) / 12) * 360 + 90; //it calculates the degrees of the clock. The modulo is needed, because a digitac clock has 24 hours and the analog just 12
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)"; //It is a CSS transformation that rotates the element by the previously calculated degrees.

  //minute hand
  let minuteHand = document.querySelector(".min-hand");
  var minDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = "rotate(" + minDegrees + "deg)";

  //second hand
  let secondHand = document.querySelector(".second-hand");
  let secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

// update the time every second
setInterval(time, 1000);
