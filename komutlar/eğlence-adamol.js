const Discord = require("discord.js");
var Jimp = require('jimp'); 
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    message.channel.send(`Fotoğraf işleniyor, lütfen bekleyin...`).then(m => m.delete(1000));

Jimp.read('https://cdn.discordapp.com/attachments/617672562281021459/617793751527718923/adamol_icin.jpg', (err, image) => {
    image.resize(301, 168)
  
    Jimp.read(user.avatarURL(), (err, avatar) => { 
        avatar.resize(100, 100)
        image.composite(avatar, 70, 10).write(`./img/rip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {message.channel.send(new Discord.MessageAttachment(`./img/rip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['adamol'],
 permLevel: 0
};

exports.help = {
 name: 'adamol',
 description: 'Profil fotoğrafınıza RIP efekti ekler.',
 usage: 'adamol'
};