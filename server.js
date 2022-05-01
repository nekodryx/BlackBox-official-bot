const express = require("express")
const Discord = require("discord.js");
const server = express()

server.all("/", (req, res) => {
  res.send("Bot beží... invite - https://discord.com/api/oauth2/authorize?client_id=958726898190520330&permissions=8&scope=bot")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot je připraven...")
  })
}

module.exports = keepAlive