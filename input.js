let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // setup interface to handle user input from stdin

  const handleUserInput = function(key) {
    // your code here
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      connection.write("Move: up");
      // console.log("Move: up");

    }

    if (key === 'a') {
      connection.write("Move: left");
      // console.log("Move: left");

    }

    if (key === 's') {
      connection.write("Move: down");    
      // console.log("Move: down");

    }

    if (key === 'd') {
      connection.write("Move: right");
      // console.log("Move: right");
    }
  };


  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;

};

module.exports = setupInput;