const autoWah = new Tone.AutoWah(50, 6, -30);
const squareOptions = { oscillator: { type: 'square' } };
const synth = new Tone.Synth(squareOptions).connect(autoWah);

let notes = {

  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'

}

function setup() {
  createCanvas(400, 400);
  synth.toDestination();
  autoWah.toDestination();

  wahSlider = createSlider(0.01, 10.00, 5, 0.5);
  wahSlider.position(25, 300);
  wahSlider.style('width', '350px');
  wahSlider.mouseReleased( () => {
    autoWah.Q.value = wahSlider.value();
  })
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);

  text('press keys a-k to ', 200,70)
  text('make some tunes!', 200, 120);
  textSize(40);
  text('add some wahs?', 200,250);
}

function keyPressed() {
  let whatNote = notes[key]
  // console.log(whatNote);
  // autoWah.Q.value = 6;
  synth.triggerAttackRelease(whatNote, "8n");
}