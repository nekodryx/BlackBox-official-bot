const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Příkazy");
table.setHeading("Příkaz", "Stav");
console.log("Vítej v logu :D ".yellow);
module.exports = (client) => {
  try{
    readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, "Načten");
            } else {
                table.addRow(file, `error->chybějící help.name nebo help.name není řetězec.`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString().cyan);
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
};