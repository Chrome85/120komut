const Discord = require("discord.js");
const db = require('croxydb')
const Util = require("../util/Util.js");
const database = require('croxydb');

module.exports.run = async (bot, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  if (!args[0])
    return message.reply(
      "<:nope:779036675338010654> **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
   const tamamdır = new Discord.MessageEmbed()
  .setColor("#f6ff00")    
   .setThumbnail('https://cdn.discordapp.com/attachments/767544528537649193/774057334862512128/Geri-Donusum-Sembolleri-90859.gif')
  .setTitle('BAŞARILI')
  .addField(`\`${message.author.username}\`  <a:tmdir:778774341357797378>  Başarıyla **${args[0]}** Mesajı Sildim`,`Spallers İyi Muhabbetler Diler...`)
 message.channel.send(tamamdır)
    message.react('👍')
   
   });
};

module.exports.help = {
  name: "sil"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "",
  usage: ""
}; 
