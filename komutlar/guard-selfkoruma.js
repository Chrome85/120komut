const Discord = require('discord.js')
const db = require('croxydb');

exports.run = async (client, message, args, dil) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  
if(args[0] === "kapat") {
  db.delete(`sunucular.${message.guild.id}.koruma`)
  message.channel.send(` Self-bot koruması kapatıldı`)
} else if(args[0] === "aç") {
  db.set(`sunucular.${message.guild.id}.koruma`, `aktif`)
  message.channel.send(' Self Bot Koruma Aktif Edildi.')
} else return message.reply(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "Koruma-Sistem"
};

exports.help = {
  name: 'self-koruma',
  description: 'Self botları engeller',
  usage: 'koruma <aç/kapat>'
};