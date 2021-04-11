const Discord = require("discord.js")
const  db = require('croxydb');

module.exports.run = async (client, message, args) => {

  let yrol = await database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "agayokaga") {// BU ALTYAPI TAMAMEN westra.dcw ʷʰʸ#9999 VE ⍭ Yiğit#6523 AİTTİR
    let kanal = await db.fetch(`bank_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor('#f0ff00')
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:siren:778777832976416778> Ban koruma sistemi zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`bank_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
        .setColor('#f0ff00')
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:siren:778777832976416778> Ban koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`bank_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor('#f0ff00')
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:siren:778777832976416778> Ban koruma sistemi zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`bank_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
        .setColor('#f0ff00')
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:siren:778777832976416778> Ban koruma sistemi sıfırlandı!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "ban-koruma-sıfırla",
  description: "ban-koruma-sıfırla",
  usage: "ban-koruma-sıfırla"
};