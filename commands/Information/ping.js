const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "ping",
    category: "Information",
    aliases: ["latency"],
    cooldown: 2,
    usage: "ping",
    description: "Dává vám informace o tom, jak rychle na vás může robot reagovat",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(client.user.username + "", client.user.displayAvatarURL())
        .setTitle(`> 🏓 Pinguju....`)
      ).then(msg=>{
        msg.edit(new MessageEmbed()
          .setColor(ee.color)
          .setFooter(client.user.username + "", client.user.displayAvatarURL())
          .setTitle(`> 🏓 Ping je: \`${Math.round(client.ws.ping)}ms\``)
        );
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(client.user.username + "", client.user.displayAvatarURL())
            .setTitle(`❌ ERROR | Vyskytla se chyba`)
            .setDescription(`\`\`\`${e.message}\`\`\``)
        );
    }
  }
}
