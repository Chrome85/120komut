const Discord = require("discord.js")
const db = require('croxydb');

module.exports.run = async (client, message, args) => {

  let yrol = await database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "spallers") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor('#f6ff00')
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:siren:778777832976416778> Lütfen bir log kanalı etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`bank_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
        .setColor('#f6ff00')
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:tmdir:778774341357797378> Ban koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
      .setColor('#f6ff00')
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`<a:siren:778777832976416778> Lütfen bir log kanalı etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`bank_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor('#f6ff00')
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`<a:tmdir:778774341357797378> Ban koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-protection"],
  permLevel: 3
};

exports.help = {
  name: "ban-koruma",
  description: "ban-koruma",
  usage: "ban-koruma"
};
