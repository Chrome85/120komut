
const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.addField('**• Komutlar**')
.addField('> -abonelog ',' Abone Logunu Ayarlarsınız')
.addField('> -abone ',' → Abone Rolü Verirsiniz')
.addField('> -aboneyrol ',' → Abone Rolünü verecek Yetkili rolünü ayarlarsınız')
.addField('> -abonerol','  → Abone Rolünü Ayarlarsınız (YETKİLİ KANALINDA YAPMANIZ TAVSİTE EDİLİR)')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'aboneyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};