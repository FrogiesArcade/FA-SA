function play(game) {
  document.getElementById('cursor').style.display = "none";
  var play = document.getElementById('play');
  var screen = document.querySelector('iframe');
  if (play.style.display == "block") {
      play.style.display = "none";
      screen.src = "";
  } else {
      play.style.display = "block";
      screen.src = game;
  }
}
