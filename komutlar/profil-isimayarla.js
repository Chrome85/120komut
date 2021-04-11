const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send("<a:siren:778777832976416778> | **Lütfen İsmini yaz.**");
  message.channel.send("<a:tmdir:778774341357797378> | **İsmin Başarıyla ``" + isim + "`` olarak ayarlandı!**");
  db.set(`pisim_${message.author.id}`, isim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "isimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};