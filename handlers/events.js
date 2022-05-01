const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Eventy");
table.setHeading("Events", "Stav");
const allevents = [];
module.exports = async (client) => {
  try{
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files){
        const event = require(`../events/${dir}/${file}`)
        let eventName = file.split(".")[0];
        allevents.push(eventName);
        client.on(eventName, event.bind(null, client));
      }
    }
    await ["client", "guild"].forEach(e=>load_dir(e));
    for (let i = 0; i < allevents.length; i++) {
        try {
            table.addRow(allevents[i], "Načten");
        } catch (e) {
            console.log(String(e.stack).red);
        }
    }
    console.log(table.toString().cyan);
    try{
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `Vítej v logu :D`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Vítej v logu :D`.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ By nekodryx /-/`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`  /-/ By nekodryx /-/`.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ Discord: NekoDryx#3813/-/`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`  /-/ By Discord: NekoDryx#3813 /-/`.length)+ "   ┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
    }catch{ /* */ }
    try{
      const stringlength2 = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length)+ "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + `Loguju se do bota...`.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length-`Loguju se do bota...`.length)+ "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1+stringlength2-` ┃ `.length)+ "┃".bold.yellow)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
    }catch{ /* */ }
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
};
