function time() {
  let now = new Date();
  console.log(now);

  let hour = 23;
  let minute = 0;
  let second = 1;

  //   let hour = now.getHours();
  //   let minute = now.getMinutes();
  //   let second = now.getSeconds();

  //Stundenzeiger
  let hourHand = document.querySelector(".hour-hand");
  console.log(hour % 12);
  var hourDegrees = ((hour % 12) / 12) * 360 + 90;
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)";

  //Minutenzeiger
  let minuteHand = document.querySelector(".min-hand");
  var minDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = "rotate(" + minDegrees + "deg)";

  //Sekunderzeiger
  let secondHand = document.querySelector(".second-hand");
  let secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
}

// Aktualisieren der Uhr alle 1 Sekunde

setInterval(time, 1000);
