const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send("<a:siren:778777832976416778> | **Lütfen Bayrağını Gir (EMOJİ OLSUN) :flag_tr: Gibi**");
  message.channel.send("<a:tmdir:778774341357797378> | **Profil Bayrağın Başarıyla ``" + bayrak + "`` olarak ayarlandı!**");
  db.set(`pbayrak_${message.author.id}`, bayrak);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bayrakayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};