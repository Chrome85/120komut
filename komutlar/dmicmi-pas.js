const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async(client , message, args) =>{

const pinkcode = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`${message.author.tag}`)
.setTitle(`:x: Bu Komutu Kullanmak İçin Beklemelisin`)
.setDescription(":white_check_mark: *Komut Bekleme Süresi* `15` *Saniyedir*")
.setThumbnail(`${message.author.avatarURL()}`)

if (talkedRecently.has(message.author.id)) {
return message.channel.send(pinkcode)
} else {

talkedRecently.add(message.author.id);
setTimeout(() => {

talkedRecently.delete(message.author.id);
}, 15000);
}}

exports.conf ={
    "aliases": ["p" , "skip"],
    "permLevel": "0"
}

exports.help = {
    "name": "pas",
    cooldown: 15,
    "description": "pas",
    "usage": "pas"
}