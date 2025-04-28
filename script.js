import { RiveCanvas } from '@rive-app/webgl2';

// Initialize Rive WebGL2 Runtime
const riveCanvas = new RiveCanvas({
  canvas: document.getElementById('riveCanvas'), // Your canvas element
  src: 'path_to_your_file.riv', // Path to the Rive file
  autoplay: true, // Automatically play the animation
});

// Optionally, add controls for play, pause, etc.
riveCanvas.play(); // Start the animation
