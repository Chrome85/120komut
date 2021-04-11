const Discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require('../ayarlar.json')
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  
   var başarılı = ['**İŞTE BU!** <a:tmdir:778774341357797378>', '**SÜPER!** <a:tmdir:778774341357797378>', '**NASIL YAPTIN BUNU?!** <a:tmdir:778774341357797378>', '**MÜKEMMEL!** <a:tmdir:778774341357797378>', '**SEVDİM BUNU!** <a:tmdir:778774341357797378>', '**ŞİMDİ OLDU!** <a:tmdir:778774341357797378>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:siren:778777832976416778>', '**OLMADI BU!** <a:siren:778777832976416778>', '**HAY AKSİ!** <a:siren:778777832976416778>', '**HADİ ORADAN!** <a:siren:778777832976416778>', '**OLMADI YA!** <a:siren:778777832976416778>', '**BÖYLE OLMAZ?!** <a:siren:778777832976416778>', '**HADİ YA!** <a:siren:778777832976416778>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, q!jail-yetkilisi ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(x2 + ` Bir kanal etiketle.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + ` Jail logunun tutulacağı kanal ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(x + ` Jail logunun tutulduğu kanal başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailkanal'],
 permLevel: 0
};

exports.help = {
 name: 'jail-kanal',
 description: 'Birisi jaile atılınca hangi kanala mesaj atılacağını ayarlarsınız.',
 usage: 'jail-kanal ayarla/sıfırla #kanal',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};