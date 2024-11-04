import paho.mqtt.publish as publish


host = "localhost"


if __name__ == '__main__':
    # publish a single message
    publish.single(topic="mosquitaller", payload="hello world Desde python", hostname=host)

    # publish multiple messages
    #publish.multiple(msgs, hostname=host)

