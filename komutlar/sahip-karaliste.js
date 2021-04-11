const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async(cclient, message, args) => {

if(message.author.id !== "769241220110352416") return message.channel.send("<:nope:779036675338010654> Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("<:nope:779036675338010654> Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send("<:nope:779036675338010654> Bir sebep belirtmelisin!")

message.channel.send("<a:tmdir:778774341357797378> **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const westra = new Discord.MessageEmbed()
.setColor("#f6ff00")
.setTimestamp()
.setDescription(`<a:tmdir:778774341357797378> **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("781591787550277632").send(westra)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };