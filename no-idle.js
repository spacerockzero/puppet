const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  let servo = new five.Servo({
    pin: 10,
    startAt: 40
  });
  servo.sweep([40,80]);
  // var servo = new five.Servo({
  //   pin: 10,
  //   startAt: 90
  // });
  // var lap = 0;

  // servo.sweep().on("sweep:full", function() {
  //   console.log("lap", ++lap);

  //   if (lap === 1) {
  //     this.sweep({
  //       range: [80, 100],
  //       step: 10
  //     });
  //   }

  //   if (lap === 2) {
  //     this.sweep({
  //       range: [90, 100],
  //       step: 5
  //     });
  //   }

  //   if (lap === 3) {
  //     this.sweep({
  //       range: [70, 110],
  //       step: 1
  //     });
  //   }

  //   if (lap === 5) {
  //     // process.exit(0);
  //     lap = 0;
  //   }
  // }); 
});