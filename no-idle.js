const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  let servo = new five.Servo(10);
  servo.sweep([80,120]); 
});