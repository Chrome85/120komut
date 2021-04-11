
const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async (client, message, args) => {

    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  var tag = db.fetch(`tag_${message.guild.id}`)
   const ss = message.guild.channels.cache.filter(c => c.type === 'category');
  var kate = ss.size.toString().replace(/ /g, " ") 
var ts = kate.match(/([0-9])/g) 
kate = kate.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
kate = kate.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:_0:781283775841042463>`,
    '1': `<a:_1:781284006313721907>`,
    '2': `<a:_2:781283669377548338>`,
    '3': `<a:_3:781283479081582622>`,
    '4': `<a:_4:781283322873643038>`,                       
    '5': `<a:_5:781283608895815700>`,
    '6': `<a:_6:781283543430725662>`,
    '7': `<a:_7:781283831881138217>`,
    '8': `<a:_8:781283406772174869>`,
    '9': `<a:_9:781283900977840148>`}[d];
 }) 
}



var metinkanal = message.guild.channels.cache.size.toString().replace(/ /g, " ") 
var ts = metinkanal.match(/([0-9])/g) 
metinkanal = metinkanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
metinkanal = metinkanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:_0:781283775841042463>`,
    '1': `<a:_1:781284006313721907>`,
    '2': `<a:_2:781283669377548338>`,
    '3': `<a:_3:781283479081582622>`,
    '4': `<a:_4:781283322873643038>`,                       
    '5': `<a:_5:781283608895815700>`,
    '6': `<a:_6:781283543430725662>`,
    '7': `<a:_7:781283831881138217>`,
    '8': `<a:_8:781283406772174869>`,
    '9': `<a:_9:781283900977840148>`}[d];
 }) 
}
  
  
  
  
  
   const s = message.guild.channels.cache.filter(c => c.type === 'voice');
  var seskanal = s.size.toString().replace(/ /g, " ") 
var ts = seskanal.match(/([0-9])/g) 
seskanal = seskanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
seskanal = seskanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:_0:781283775841042463>`,
    '1': `<a:_1:781284006313721907>`,
    '2': `<a:_2:781283669377548338>`,
    '3': `<a:_3:781283479081582622>`,
    '4': `<a:_4:781283322873643038>`,                       
    '5': `<a:_5:781283608895815700>`,
    '6': `<a:_6:781283543430725662>`,
    '7': `<a:_7:781283831881138217>`,
    '8': `<a:_8:781283406772174869>`,
    '9': `<a:_9:781283900977840148>`}[d];
 }) 
}
  
 
    let count = 0 
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    var sessayı = count.toString().replace(/ /g, " ") 
var ts = sessayı.match(/([0-9])/g) 
sessayı = sessayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
sessayı = sessayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:_0:781283775841042463>`,
    '1': `<a:_1:781284006313721907>`,
    '2': `<a:_2:781283669377548338>`,
    '3': `<a:_3:781283479081582622>`,
    '4': `<a:_4:781283322873643038>`,                       
    '5': `<a:_5:781283608895815700>`,
    '6': `<a:_6:781283543430725662>`,
    '7': `<a:_7:781283831881138217>`,
    '8': `<a:_8:781283406772174869>`,
    '9': `<a:_9:781283900977840148>`}[d];
 }) 
}
  
  
  

  var toplamsayı = message.guild.members.cache.size.toString().replace(/ /g, " ") 
var ts = toplamsayı.match(/([0-9])/g) 
toplamsayı = toplamsayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamsayı = toplamsayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:_0:781283775841042463>`,
    '1': `<a:_1:781284006313721907>`,
    '2': `<a:_2:781283669377548338>`,
    '3': `<a:_3:781283479081582622>`,
    '4': `<a:_4:781283322873643038>`,                       
    '5': `<a:_5:781283608895815700>`,
    '6': `<a:_6:781283543430725662>`,
    '7': `<a:_7:781283831881138217>`,
    '8': `<a:_8:781283406772174869>`,
    '9': `<a:_9:781283900977840148>`}[d];
 }) 
}
let bölge = {
            "us-central": "Amerika :flag_us:",
            "us-east": "Doğu Amerika :flag_us:",
            "us-south": "Güney Amerika :flag_us:",
            "us-west": "Batı Amerika :flag_us:",
            "eu-west": "Batı Avrupa :flag_eu:",
            "eu-central": "Avrupa :flag_eu:",
            "singapore": "Singapur :flag_sg:",
            "london": "Londra :flag_gb:",
            "japan": "Japonya :flag_jp:",
            "russia": "Rusya :flag_ru:",
            "hongkong": "Hong Kong :flag_hk:",
            "brazil": "Brezilya :flag_br:",
            "singapore": "Singapur :flag_sg:",
            "sydney": "Sidney :flag_au:",
            "southafrica": "Güney Afrika :flag_za:",
            "europe": "Avrupa :flag_eu:"
    }
if(bölge) {
  
const oç = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor('#f6ff00')
.setTitle(`${message.guild.name} Adlı Sunucunun Bilgileri.`)
.setDescription(`**<a:kral:778787824018653205> Sunucunun Kurucusu: <@${message.guild.owner.id}> \n Sunucu Sahibinin İD'Si: ${message.guild.owner.id} \n\n\n <a:hype:778788019548454912> Kişi Sayısı: ${toplamsayı} \n <a:hype:778788019548454912> Sunucu Tagı : ${tag} \n <:ses:781291515753398293> Seslideki Kişi Sayısı: ${sessayı} \n <a:salev:781292849719017523> Sesli Kanal Sayısı: ${seskanal} \n <a:salev:781292849719017523> Toplam Kanal Sayısı: ${metinkanal} \n <a:salev:781292849719017523> Toplam Kategori Sayısı: ${kate} \n <a:dnya:778787223847829504> Sunucnun Bölgesi: ${bölge[message.guild.region]} \n <a:boost:781294320379887616> Sunucu Takviye(Boost) Seviyesi Sayısı: ${message.guild.premiumTier}/3 \n <a:boost:781294320379887616> Sunucu Takive(Boost) Sayısı: ${message.guild.premiumSubscriptionCount} \n\n\n <a:sasa:778787940741677088> Çevrimiçi : ${message.guild.members.cache.filter(o => o.presence.status === 'online').size} \n <a:kalpp:778787453766467595> Rahatsız Etmeyin : ${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size} \n <a:galp:778787614794186752> Boşta: ${message.guild.members.cache.filter(i => i.presence.status === 'idle').size} \n <a:sgalp4:778787567642083328> Görünmez/Çevrimdışı : ${message.guild.members.cache.filter(off => off.presence.status === 'offline').size} \n <a:yildiz:778774342640730112> Botlar : ${botlar}**`)
  message.channel.send(oç)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi","sb"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-bilgi',
  description: "Bot Sahibine Özel Komut."
};