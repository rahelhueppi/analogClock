function time() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  //Stundenzeiger
  let hourHand = document.querySelector(".hour-hand");
  /*if (hour > 12) {
    hour = hour - 12;
  }*/
  let hourDegree = (hour / 12) * 360;
  hourHand.style.transform = "rotate(" + hourDegree + "deg)";

  //Minutenzeiger
  let minuteHand = document.querySelector(".min-hand");
  let minuteDegree = (minute / 60) * 360;
  minuteHand.style.transform = "rotate(" + minuteDegree + "deg)";

  //Sekunderzeiger
  let secondHand = document.querySelector(".second-hand");
  let secondDegree = (second / 60) * 360;
  secondHand.style.transform = "rotate(" + secondDegree + "deg)";
}

// Aktualisieren der Uhr alle 1 Sekunde
setInterval(time, 500);
