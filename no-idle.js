const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  let servo = new five.Servo({
    pin: 10,
    startAt: 150
  });

  // Chaylo Phaif
  const every = 5000; // move every {x} ms
  const long = 3000 // for {x} ms
  const speed = 1000 // taking {x} ms to move
  const forward = 150;
  // const mid = 100;
  const back = 100;


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
    servo.to(forward, speed);
    setTimeout(() => {
      servo.to(back, speed);
    }, long); // move for {x} ms
  }, every); // every {x} ms

});
