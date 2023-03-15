const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`);

    // conn.write("Name: FBI");

  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    // console.log(`Successfully connected to game server`);

    conn.write("Name: FBI");    
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 150);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 200);
    // setInterval(function(){
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    //   conn.write("Move: down");
    // }, 50); 
  });

};
// console.log("Connecting ...");
// connect();

module.exports = connect;