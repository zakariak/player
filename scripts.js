video = document.querySelector('.player__video');
// global variable for the video player

var playbutton = document.querySelector('.toggle');
var forwardbutton = document.querySelector('.player__button[data-skip="25"]');
var backwardbutton = document.querySelector('.player__button[data-skip="-10"]');
var progressfilled = document.querySelector('.progress');
var skipbutton = document.querySelector('.player__slider[name="playbackRate"]');
var volumebutton = document.querySelector('.player__slider[name="volume"]');

playbutton.addEventListener("click", player);
forwardbutton.addEventListener("click", skipforward);
backwardbutton.addEventListener("click", skipbackward);
skipbutton.addEventListener("click", speedvideo);
volumebutton.addEventListener("click", volume);
video.addEventListener('timeupdate', progressbar);
progressfilled.addEventListener('click', skipprogress);
video.addEventListener("dblclick", fullscreen);
// all the event listeners


function player() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}
// function for the pauze/play of the video when clicked


function skipforward() {
  video.currentTime += 25;
}
// fast forward 25 seconds when clicked on the +25 button


function skipbackward() {
  video.currentTime += -10;
}
// fast backward 10 seconds when clicked on the -10 button


function speedvideo() {
  var skipbutton = document.querySelector('.player__slider[name="playbackRate"]');
  video.playbackRate = skipbutton.value;
}
// sets the speed of the video with a 'range' on click of the range


function volume() {
  var volumebutton = document.querySelector('.player__slider[name="volume"]');
  video.volume = volumebutton.value;
}
// volume of the video with a 'range' on click of the range

function progressbar() {
  var progressbar =  document.querySelector('.progress');
  var percentage = 100 / video.duration * video.currentTime;
  progressbar.value = percentage;
  document.querySelector('.progress__filled').style.flexBasis = percentage + "%";
}
// fills progressbar when video is played

function skipprogress(event) {
  var theWindow = document.querySelector('.progress');
  video.currentTime = video.duration * (event.offsetX / theWindow.clientWidth);
}
// when clicking on a position in the progressbar skip to that part of the video

function fullscreen() {
  var thePlayer = document.querySelector('.player');
  var fullscreenCheck = (document.mozFullScreen || document.webkitIsFullScreen);

  if(!fullscreenCheck) {
    if (thePlayer.requestFullscreen) {
      thePlayer.requestFullscreen();
    }
    else if (thePlayer.mozRequestFullScreen) {
      thePlayer.mozRequestFullScreen();
    }
    else if (thePlayer.webkitRequestFullScreen) {
      thePlayer.webkitRequestFullScreen();
    }
  }
    else if (fullscreenCheck) {
    video.addEventListener('click', function(){
      if (thePlayer.exitFullscreen) {
        video.exitFullscreen();
      } else if (thePlayer.webkitExitFullscreen) {
        video.webkitExitFullscreen();
      } else if (thePlayer.mozCancelFullScreen) {
        vi  deo.mozCancelFullScreen();
      } else if (thePlayer.msExitFullscreen) {
        video.msExitFullscreen();
      }

    });
  }

}
// if double clicked on the video enter fullscreen if in fullscreen single click to exit
