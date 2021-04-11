const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../index.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 
let eklenti = new Discord.MessageEmbed()  
.addField(`<a:yildiz:778774342640730112> __Guard Komutları__`,` \`s*guard\` `,true)
.addField(`<a:yildiz:778774342640730112> __Yetkili Komutları__`,` \`s*moderasyon\` `,true)
.addField(`<a:yildiz:778774342640730112> __Gif Komutları__`,` \`s*gifyardım\` `,true)
.addField(`<a:yildiz:778774342640730112> __Abone Komutları__`,` \`s*aboneyardım\` `,true)
.addField(`<a:yildiz:778774342640730112> __Profil Komutları__`,` \`s*profil\` `,true)
.addField(`<a:yildiz:778774342640730112> __Eğlence Komutları__`,` \`s*eğlence\` `,true)
.addField(`<a:yildiz:778774342640730112> __Kullanıcı Komutları__`,` \`s*kullanıcı\` `,true)
.addField(`╔═══════════◥◣❖◢◤════════════╗`,
`**║  \`${prefix}botdavet\` __Botu Davet Edebilirsiniz!__**
**║  \`${prefix}istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
**║ \`${prefix}bug-bildir\` __Bot Hatalarını Bildirirsiniz.__**
**╚═══════════◥◣❖◢◤════════════╝**
`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  