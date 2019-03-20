//This code is adapted from 'Web Audio API' by Boris Smus

//Initialize audio context
var contextClass = (window.AudioContext ||
  window.webkitAudioContext ||
  window.mozAudioContext ||
  window.oAudioContext ||
  window.msAudioContext);
if (contextClass) {
  //Web Audio API is available
  var context = new contextClass();
} else {
  //Web Audio API is not available; ask the user to use a supported browser.
}

//Load audio sample
var URL = './mp3/kom001.mp3';
var request = new XMLHttpRequest();
request.open('GET', URL, true);
request.responseType = 'arraybuffer';

//Decode asynchronously
request.onload = function() {
  context.decodeAudioData(request.response, function(theBuffer) {
    buffer = theBuffer;
  }, onError);
}
request.send();

function playSound(buffer) {
  //Create audio source
  var source = context.createBufferSource();
  source.buffer = buffer;
  //Connect source to destination
  source.connect(context.destination);
  source.start(0);
}






