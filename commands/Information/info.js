const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "info",
    category: "Information",
    aliases: ["information"],
    cooldown: 2,
    usage: "info",
    description: "Dává vám informace o botovi",
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(client.user.username + "", client.user.displayAvatarURL())
        .setTitle(`> ⚙ Načítám informace....`)
      ).then(msg=>{
        msg.edit(new MessageEmbed()
          .setColor(ee.color)
          .setFooter(client.user.username + "", client.user.displayAvatarURL())
          .setTitle(`> ⚙ Informace o botovi načteny`)
                 .setThumbnail(client.user.displayAvatarURL())
                .addField("Myjitel", "NekoDryx#3813", true) 
                   .addField("Invite", "[Klikni zde ](https://alba-rosa.cz/)", true)
                   .addField("Support server", "[Klikni zde ](https://discord.gg/gPufUCpb8Q)", true) 
                 .addField("Ping", `${Math.round(client.ws.ping)}ms (milisekund)`, true) 
                
                 .addField("ID bota", "958726898190520330", true) 
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
