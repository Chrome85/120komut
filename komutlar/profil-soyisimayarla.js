const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send("<a:siren:778777832976416778> | **Lütfen Soyismini yaz.**");
  message.channel.send("<a:tmdir:778774341357797378> | **Soy İsmin ``" + soyisim + "`` olarak ayarlandı!**");
  db.set(`psoyisim_${message.author.id}`, soyisim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "soyisimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};