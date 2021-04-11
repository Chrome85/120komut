const Discord = require('discord.js');//krom code Krom#0516
//krom code Krom#0516
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Gif Komutları')
.setTimestamp()
.addField('.gif-ara','Gif Ararsınız')
.addField('.mangif','Erkek gifi')
.addField('.womangif','Kadın gifi')
.addField('.animegif','Anime gif')
.addField('.babygif','Bebek gif')
.addField('.hayvangif','Hayvan gifi')
.setFooter('Cowboy', client.user.avatarURL())//krom code Krom#0516
.setTimestamp()
.setThumbnail(client.user.avatarURL())//krom code Krom#0516
message.channel.send(embed)//krom code Krom#0516
};
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], //krom code Krom#0516
  permLevel: 0 
};

exports.help = {
  name: 'gifyardım',
  description: 'Tüm komutları gösterir.',//krom code Krom#0516
  usage: 'yardım'//krom code Krom#0516
};//krom code Krom#0516