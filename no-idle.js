const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  let servos = new five.Servo(10);
  servo.cw(1); 
});