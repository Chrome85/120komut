const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      "<a:siren:778777832976416778> | **Lütfen yaşını yaz.**"
    );
  message.channel.send(
    "<a:tmdir:778774341357797378> | **Yaşın ``" + yas + "`` olarak ayarlandı!**"
  );
  db.set(`pyas_${message.author.id}`, yas);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaşayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
