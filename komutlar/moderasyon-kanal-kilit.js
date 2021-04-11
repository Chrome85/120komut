const Discord = require("discord.js");
const db = require('croxydb');
const ms = require("ms");
const database = require('croxydb');

exports.run = (client, message, args) => {
  let yrol =  database.fetch(`yrol.${message.guild.id}`)
  if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
  if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor('#f6ff00')
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField(
        ":warning: Uyarı :warning:",
        "Spallers | `kilit` adlı komutu özel mesajlarda kullanamazsın."
      );
    return message.author.send(motion);
  }
  if (!client.lockit) client.lockit = [];
  let time = args.join(" ");
  let validUnlocks = ["kilitaç", "unlock"];
  if (!time)
    return message.channel.send(
      "Spallers・**Doğru Kullanım** : `s*kilitle 2min`"
    );
  if (validUnlocks.includes(time)) {
  message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null })
      .then(() => {
           const açildi = new Discord.MessageEmbed()
           .setColor('#f6ff00')
           .setTitle('・Spallers・')
           .setDescription(`**Kanal ${time} Süre Sonra Tekrar Aktif Edildi.**`);
           message.channel.send(açildi)
    
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(motion => {
        console.log(motion);
      });
  } else {
  message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false })

      .then(() => {
          const kilitlendi = new Discord.MessageEmbed()
           .setColor('#f6ff00')
           .setTitle('・Spallers・')
           .setDescription(`**\`Kanal ${ms(ms(time), { long: true })}\` Boyunca Kilitlendi.**`);
           message.channel.send(kilitlendi)
          .then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
  message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null })

                
           const açildi = new Discord.MessageEmbed()
           .setColor('#f6ff00')
           .setTitle('・Spallers・')
           .setDescription(`**Kanal \`${ms(ms(time), { long: true })}\` Süre Sonra Tekrar Aktif Edildi.**`);
           message.channel.send(açildi)
                
                .catch(console.motion);
              delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(motion => {
        console.log(motion);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalıkilitle'],
  permLevel: 3
};
exports.help = {
  name: 'kilitle',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kanalıkilitle'
};