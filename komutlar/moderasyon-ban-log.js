const Discord = require('discord.js');
const db = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('```Ban log kanalını belirtmelisin```')

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`<a:tmdir:778774341357797378> | **Ban log kanalı <#${kanal.id}> Olarak ayarlandı!**`)
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-log"
}