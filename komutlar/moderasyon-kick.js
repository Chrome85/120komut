const Discord = require('discord.js');
const db = require('croxydb');
const database = require('croxydb');

exports.run = async(client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
	let rol = db.fetch(`kickrol_${message.guild.id}`)
  	let kicklog = db.fetch(`kicklog_${message.guild.id}`)
	if(!kicklog) return message.channel.send('<:nope:779036675338010654> ``Kick Log Sistemi Ayarlanmamış.``')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('<a:siren:778777832976416778> ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send('<a:siren:778777832976416778> ``Kendini Kickleyemezsin``')
     if(user.id === client.user.id) return message.channel.send('<a:siren:778777832976416778> ``Botu Kickleyemezsin``')
  if(user.id === message.guild.ownerID) return message.channel.send('<a:siren:778777832976416778> ``Sunucu sahibini Kickleyemessin Zaten Yetkim Yetmez :)``')
    if (!message.guild.member(user).bannable) return message.reply('<a:siren:778777832976416778> ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Kicklemek istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).kick({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setTitle('Bir Kişi Kick Yedi')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Kicklenen Kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(kicklog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('<a:tmdir:778774341357797378> | **Kickleme İşlemi Başarıyla İptal Edildi**')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick"
}