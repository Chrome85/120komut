const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Spallers Guard Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/779780476071575574/782330932584644608/standard.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Ban Koruması__`,` \`s*ban-koruma\` Ban Korumasını Aktif Eder.`,true)
.addField(`<:sagok:778774307253518366> __Spam Koruması__`,` \`s*spam\` Spam Korumasını Aktif Eder.`,true)
.addField(`<:sagok:778774307253518366> __Self Koruma__`,` \`s*self-koruma\` Self Botları Susturur.`,true)
.addField(`<:sagok:778774307253518366> __Bot Koruması__`,` \`s*anti-raid\` Bot Korumasını Aktif Eder.`,true)
.addField(`<:sagok:778774307253518366> __Reklam Koruması__`,` \`s*reklamengel\` Reklam Korumasını Aktif Eder.`,true)
.addField(`<:sagok:778774307253518366> __Reklam-Log Koruması__`,` \`s*reklamlog\` Reklam Yapınca Mesajı Siler Kanal'a Atar.`,true)
.addField(`<:sagok:778774307253518366> __Küfür Koruması__`,` \`s*küfür-engelle\` Küfür Korumasını Aktif Eder.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'guard'
  }; 
  