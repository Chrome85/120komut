const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.addField(`<:sagok:778774307253518366> __Bayrak Ayarla__`,` \`s*bayrakayarla\` İstediğiniz Bayrağı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Cinsiyet Ayarla__`,` \`s*cinsiyetayarla\` Cinsiyetinizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __İsim Ayarla__`,` \`s*isimayarla\` İsminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Soyisim Ayarla__`,` \`s*soyisimayarla\` Soyisminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Yaş Ayarla__`,` \`s*yaşayarla\` Yaşınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Oyun Ayarla__`,` \`s*favorioyun\` Favori Oyununuzu Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Şarkı Ayarla__`,` \`s*favorişarkı\` Favori Şarkınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Profilim__`,` \`s*profilim\` Profilinize Bakarsınız.`,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'profil'
  }; 
  