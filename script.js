timeLeft = 12;

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String( timeLeft );
  if (timeLeft > 1) {
    setTimeout(countdown, 1000);
  }
  else if(timeLeft<=1)
  {
    result();
  } 
};

setTimeout(countdown, 1000);

function result() {
  document.getElementById('india').innerHTML="Happy Independence Day";
}

