const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  let servo = new five.Servo({
    pin: 10,
    startAt: 20
  });

  // Chaylo Phaif
  const every = 20000; // move every {x} ms
  const long = 3000 // for {x} ms
  const speed = 3000 // taking {x} ms to move
  
  // // Best in E (doesn't work)
  // const every = 10000; // move every {x} ms
  // const long = 3000 // for {x} ms
  // const speed = 500 // taking {x} ms to move

  // // Phor Tza
  // const every = 15000; // move every {x} ms
  // const long = 7000 // for {x} ms
  // const speed = 100 // taking {x} ms to move

  // servo = new five.Servo({
  //   pin: 10,
  //   startAt: 20
  // });

  const timer = setInterval(() => {
    servo.to(0, speed);
    setTimeout(() => {
      servo.to(20, speed);
    }, long); // move for {x} ms
  }, every); // every {x} ms

});