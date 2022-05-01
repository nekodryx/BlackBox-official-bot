const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "say",
    category: "Administration",
    aliases: [""],
    cooldown: 2,
    usage: "say <TEXT>",
    description: "Přepošle váš text",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(client.user.username + "", client.user.displayAvatarURL())
            .setTitle(`❌ ERROR | Neposkytli jste text`)
            .setDescription(`Usage: \`${prefix}say <VAŠE ZPRÁVA>\``)
        );
      message.channel.send(text);
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
