const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`);

  });

  conn.on("connect", () => {
    // code that does something when the connection is first established

    conn.write("Name: FBI");    
  });

  return conn;
};
// console.log("Connecting ...");
// connect();



module.exports = {
  connect,
};
