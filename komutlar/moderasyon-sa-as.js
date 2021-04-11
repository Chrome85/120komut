const db = require('croxydb')
const Discord = require('discord.js')
const database = require('croxydb');

exports.run = async (bot, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  if (!args[0]) return message.channel.send(':no_entry: Sa-as yazısını açmak için; `s*sa-as aç veya kapat`')

  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<a:tmdir:778774341357797378> | **Sa-As Sistemi Başarıyla Açıldı** `)
   
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<a:tmdir:778774341357797378> | **Sa-As Sistemi Başarıyla Kapandı** `)
   
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};