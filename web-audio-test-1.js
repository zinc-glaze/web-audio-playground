//Adapted from https://css-tricks.com/introduction-web-audio-api/

var context = new (window.AudioContext || window.webkitAudioContext)();

//OscillatorNode.type = 'sine'|'square'|'triangle'|'sawtooth';

var oscillator = context.createOscillator();
var gain = context.createGain();
var now = context.currentTime;

oscillator.type = 'sine';
oscillator.frequency.value = 220;
oscillator.connect(gain);
gain.connect(context.destination);


gain.gain.setValueAtTime(0.5, now);
// gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
oscillator.start(now);
oscillator.stop(now + 3);


document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

