const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {


  let favorioyun = args.slice(0).join(" ");
  if (!favorioyun) return message.channel.send("<a:siren:778777832976416778> | **Lütfen Oyununu yaz.**");
  message.channel.send("<a:tmdir:778774341357797378> | **Favori Oyunun ``" + favorioyun + "`` olarak ayarlandı!**");
  db.set(`pfavorioyun_${message.author.id}`, favorioyun);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorioyun",
  description: "",
  usage: "",
  kategori: "Profil"
};