const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async (client, message, args) => {

  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:siren:778777832976416778> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
const sistem = await db.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`<a:siren:778777832976416778> Spam koruma zaten aktif.`)).then(a => a.delete({timeout: 10000}));

db.set(`spam.${message.guild.id}`, 'spallers');
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor('#f6ff00').setDescription(`<a:tmdir:778774341357797378> Spam koruma başarıyla açıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel', 'spam-koruma', 'spamkoruma'],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};
