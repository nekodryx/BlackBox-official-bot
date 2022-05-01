const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "uptime",
    category: "Information",
    aliases: [""],
    cooldown: 10,
    usage: "uptime",
    description: "Pošle dobu trvání, jak dlouho je robot online",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(client.user.username + "", client.user.displayAvatarURL())
        .setTitle(`:white_check_mark: **${client.user.username}** je od doby spuštění:\n ${duration(client.uptime)} aktivní`)
      );
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
