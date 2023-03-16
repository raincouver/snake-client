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

    }

    if (key === 'a') {
      connection.write("Move: left");

    }

    if (key === 's') {
      connection.write("Move: down");    

    }

    if (key === 'd') {
      connection.write("Move: right");
    }

    if (key === 'q') {
      connection.write("Say: MEOW");
    }

    if (key === 'e') {
      connection.write("Say: WOOF");
    }

    if (key === 'z') {
      connection.write("Say: HOW R U");
    }

    if (key === 'x') {
      connection.write("Say: SO FAR SO GOOD");
    }

    if (key === 'c') {
      connection.write("Say: C U LATER");
    }
  };


  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;

};

module.exports = setupInput;