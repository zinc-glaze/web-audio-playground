//Adapted from https://css-tricks.com/introduction-web-audio-api/

var context = new (window.AudioContext || window.webkitAudioContext)();

//OscillatorNode.type = 'sine'|'square'|'triangle'|'sawtooth';

var osc01 = context.createOscillator();
var osc02 = context.createOscillator();
var gain = context.createGain();
var now = context.currentTime;

osc01.type = 'sine';
osc01.frequency.value = 440;
osc01.connect(gain);
osc01.start(now);
osc01.stop(now + 5);

osc02.type = 'square';
osc02.frequency.value = 110;
osc02.connect(gain);
osc02.start(now + 2);
osc02.stop(now + 5);

gain.connect(context.destination);
gain.gain.setValueAtTime(0.5, now);
gain.gain.exponentialRampToValueAtTime(0.001, now + 5);


//button click handler
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

