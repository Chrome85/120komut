const Discord = require("discord.js");
const db = require('croxydb');
exports.run = (client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid açılmamış. Açmak için **q!anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("Lütfen bir bot id si girin");
 
  if (isNaN(args[1])) {
    return message.reply("Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.cache.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.channel.send(args[1] + " <a:okk:742257773454032989> `ID'li Bota Başarıyla İzin Verildi.`");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.channel.send(args[1] + " <a:okk:742257773454032989> `ID'li Botun İzni Başarıyla Kaldırıldı.`");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bot-izni"
};