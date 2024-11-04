const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://127.0.0.1");

client.on("connect", () => {
  client.subscribe("mosquitaller", (err) => {
    if (!err) {
      client.publish("mosquitaller", "Pub desde js");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});