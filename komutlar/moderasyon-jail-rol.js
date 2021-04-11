const Discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require('../ayarlar.json')
const database = require('croxydb');

exports.run = async(client, message, args) => {

   var başarılı = ['**İŞTE BU!** <a:tmdir:778774341357797378>', '**SÜPER!** <a:tmdir:778774341357797378>', '**NASIL YAPTIN BUNU?!** <a:tmdir:778774341357797378>', '**MÜKEMMEL!** <a:tmdir:778774341357797378>', '**SEVDİM BUNU!** <a:tmdir:778774341357797378>', '**ŞİMDİ OLDU!** <a:tmdir:778774341357797378>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:siren:778777832976416778>', '**OLMADI BU!** <a:siren:778777832976416778>', '**HAY AKSİ!** <a:siren:778777832976416778>', '**HADİ ORADAN!** <a:siren:778777832976416778>', '**OLMADI YA!** <a:siren:778777832976416778>', '**BÖYLE OLMAZ?!** <a:siren:778777832976416778>', '**HADİ YA!** <a:siren:778777832976416778>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, q!jail-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: q!yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Jail rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` Jail rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 0
};

exports.help = {
 name: 'jail-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'jail-rol ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};