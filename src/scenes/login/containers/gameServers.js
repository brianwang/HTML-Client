const gameServers = [
  { name: "Local host", 
    href: "",
    websocketUri: "ws://127.0.0.1:4243",
    description: "Select this if you are hosting a local game server on your own machine." },
  { name: "dwarftowers.com",
    href: "http://www.dwarftowers.com/",
    websocketUri: "ws://dwarftowers.com:4243",
    description: "Server hosted by our development team." },
  { name: "Zomis Productions",
    href: "http://www.zomis.net/",
    websocketUri: "ws://stats.zomis.net:4243",
    description: "Server hosted by our development team." },
  { name: "Other",
    href: "",
    websocketUri: "",
  description: "Enter a server address manually." }
]

export default gameServers
