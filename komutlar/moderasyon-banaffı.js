const Discord = require('discord.js'); 
const db = require('croxydb');
const database = require('croxydb');

exports.run = (client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
   message.channel.send('<a:tmdir:778774341357797378> | **İşlem Başarılı!\n<a:tmdir:778774341357797378> | Sunucudaki Tüm Yasakları Kaldırdım**')

  message.guild.fetchBans().then(bans => {
      bans.cache.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tyk","kaldır"],
  permLevel: 3
};

exports.help = {
  name: 'banaffı',
  description: '',
  usage: ''
};