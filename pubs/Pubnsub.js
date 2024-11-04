const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://127.0.0.1");

client.on("connect", () => {
  client.subscribe("mosquitaller", (err) => {
    if (!err) {
      client.publish("mosquitaller", "js conectado");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log("Soy cliente js y recibo:");
  console.log(message.toString());
});
