const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "image",
    category: "Administration",
    aliases: ["say-image"],
    cooldown: 2,
    usage: "image <LINK>",
    description: "Přepošle váš obrázek jako embed",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | Musíte uvést link na obrázek`)
            .setDescription(`Použití: \`${prefix}image  <LINK>\``)
        );
      let userargs = args.join(" ").split("++");
      let image = userargs[0];
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(client.user.username + "", client.user.displayAvatarURL())
        .setImage(image ? image : "")
      )
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | Vyskytla se chyba`)
            .setDescription(`\`\`\`${e.message}\`\`\``)
        );
    }
  }
}