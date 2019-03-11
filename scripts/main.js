
function startTime() {
	
  //variabele declareren  
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
	
  m = checkTime(m);
  s = checkTime(s);
	
//de tijd tonen
  document.getElementById('klok').innerHTML = h + ":" + m + ":" + s;

//elke 1000 ms (1 sec) refresht de tijd
  var t = setTimeout(startTime, 1000);
}


function checkTime(i) {

  //bij getallen onder de 10 een 0 erbij
  if (i < 10) {
      i = "0" + i
  };  

  return i;
}


function background() {
  var hours = new Date().getHours();

	//gebruik het onderstaande om te testen
	hours = 0;

  if (hours >= 0 && hours < 6) {
  	document.body.className = "night";
    animateNight();
  }  
  else if (hours >= 6 && hours <= 24) {
  	document.body.className = "day";
  	animateDay();
  }
}

//animatie nacht
function animateDay() {
    TweenMax.to("#sun", 10 , {rotation:-360,ease:Power0.easeNone,repeat:-1});

}

// animatie dag
function animateNight() {
    TweenMax.to("#moon", 10 , {rotation:-360,ease:Power0.easeNone,repeat:-1});

}

window.onload = function() {
	background();
	startTime();
};

