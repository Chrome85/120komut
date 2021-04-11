const Discord = require('discord.js');
const database = require('croxydb');

exports.run = async (client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  const nn = new Discord.MessageEmbed().setThumbnail();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:siren:778777832976416778> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(!sistem) return message.channel.send(nn.setDescription(`<a:siren:778777832976416778> Spam koruma zaten aktif değil.`)).then(a => a.delete({timeout: 10000}));

data.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor(0x36393F).setDescription(`<a:siren:778777832976416778> Spam koruma başarıyla kapatıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spamkapat', 'spam-koruma-kapat', 'spam-korumakapat', 'spamkoruma-kapat'],
  permLevel: 0
}

exports.help = {
  name: 'spam-kapat'
};