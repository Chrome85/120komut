const Discord = require('discord.js')
const db = require('croxydb')
const database = require('croxydb');

exports.run = async(client, message, args) => {

  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
if (args[0] === "sıfırla" || args[0] === "kapat") {
  
if(!logkanal) return message.channel.send(new Discord.MessageEmbed()
                                               
.setDescription(`Mod-Log kanalı zaten ayarlı değil!`)
.setColor("RED"));
    
db.delete(`codeminglog_${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
                          
.setDescription(`Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));

return
}
  
if (!logk) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı belirt!`)
.setColor("RED"));
 

db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log'],
    permLevel: 0 
};

exports.help = {
    name: 'modlog'
};