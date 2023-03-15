const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243',
    port:'50541',
  });

  // const client = net.createConnection(conn);
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  // code that does something when the connection is first established
  

  console.log(`Successfully connected to game server`);
  // client.write(`setName ${conn}`);

  });


  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: RZ");
  });

  // client.on('data', (data) => {
  //   console.log(`${data}`);
  // });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;