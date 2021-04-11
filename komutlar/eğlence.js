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
.setAuthor(`Spallers Gif Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/779780476071575574/782332250913243176/standard_1.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Minecraft Skin__`,` \`s*mcskin\`Adı yazılan kişinin mc skinini görürsünüz..`,true)
.addField(`<:sagok:778774307253518366> __Maymun__`,` \`s*maymun\` Maymun Gif'i Atar.`,true)
.addField(`<:sagok:778774307253518366> __Kedi__`,` \`s*kedi\` Kedi Gif'i Atar.`,true)
.addField(`<:sagok:778774307253518366> __Kral Ol__`,` \`s*kralol\` Kral olursunuz.`,true)
.addField(`<:sagok:778774307253518366> __Kahve İç__`,` \`s*kahveiç\` Türk Kahvesi İçersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kapak Laflar__`,` \`s*kapaklaflar\` Bot, kapak laflar atar.`,true)
.addField(`<:sagok:778774307253518366> __İlginç Bilgi__`,` \`s*ilginçbilgi\` Bot, ilginç bilgiler söyler.`,true)
.addField(`<:sagok:778774307253518366> __Kartopu__`,` \`s*kartopu\` Etiketlediğiniz kişiye kartopu atarım.`,true)
.addField(`<:sagok:778774307253518366> __Hava Durumu__`,` \`s*havadurumunu\` Hava durumunu söyler.`,true)
.addField(`<:sagok:778774307253518366> __Hediye Ver__`,` \`s*hediyever\` Etiketlediğiniz kişiye hediye veririm.`,true)
.addField(`<:sagok:778774307253518366> __Gol At__`,` \`s*golat\` Gol Atarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Emoji Ekle__`,` \`s*emojiekle\` Emoji eklersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'eğlence'
  }; 
  