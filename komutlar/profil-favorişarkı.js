const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let favorişarkı = args.slice(0).join(" ");
  if (!favorişarkı) return message.channel.send("<a:siren:778777832976416778> | **Lütfen Şarkını yaz.**");
  message.channel.send("<a:tmdir:778774341357797378> | **Favori Şarkın ``" + favorişarkı + "`` olarak ayarlandı!**");
  db.set(`pfavorişarkı_${message.author.id}`, favorişarkı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "favorişarkı",
  description: "",
  usage: "",
  kategori: "Profil"
};