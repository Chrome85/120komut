const Discord = require('discord.js');
const db = require('croxydb')
const database = require('croxydb');

const client = new Discord.Client();
exports.run = (client, message, args, member ) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
{
    const prmlv = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setDescription('**:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz! :warning:**')
   .setTimestamp() 
    .setFooter(`Spallers Ban Sistemi`)
   return message.channel.send(prmlv)
  } 
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#f6ff00')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı ', '`unban`komutu özel mesajlarda kullanılamaz.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) {
    const bid = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setDescription('**Banı kaldırılacak kişinin ID numarasını yazmalısın!**\n Doğru Kullanım:`s*unban idnumarası sebep`')
   .setTimestamp() 
    .setFooter(`Spallers Ban Sistemi`)
   return message.channel.send(bid).catch(console.error);
  } 
  if (reason.length < 1) {
    const reas = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setDescription('**Ban kaldırma sebebini yazmalısın!**')
   .setTimestamp() 
   return message.channel.send(reas)
  } 
 
  
  message.guild.members.unban(user);
  const embed = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setTimestamp()
    .setDescription('**Bir Kullanıcının Yasağı Kaldırıldı** <a:tmdir:778774341357797378>')
    .addField('Yasağı Kaldırılan Kullanıcı:', `<@!${user}>`,true)
    .addField('Yasağı Kaldıran Yetkili:', `<@!${message.author.id}>`,true)
    .addField('Yasağı Kaldırma Sebebi:', reason,false)
  .setFooter(`Spallers Ban Sistemi`);
    
   message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};