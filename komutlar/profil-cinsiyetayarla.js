const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      "<a:siren:778777832976416778> | Lütfen Cinsiyetini yaz. Unutma Sadece erkek,kız veya yok yazabilirsin (**Baş Harflerini BÜYÜK YAZMA**)"
    );
  message.channel.send("<a:tmdir:778774341357797378> | **Cinsiyetin Başarıyla ``" + cinsiyet + "`` olarak ayarlandı!**");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori:"Profil"
};
 
exports.help = {
  name: "cinsiyetayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};