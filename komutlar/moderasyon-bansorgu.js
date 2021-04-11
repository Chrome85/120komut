const Discord = require('discord.js');
const db = require('croxydb');
const database = require('croxydb');

exports.run = (client, message, args) => {
    let yrol =  database.fetch(`yrol.${message.guild.id}`)
    if(!yrol) return message.channel.send(`Yetkili rolü ayarlanmamış!`)
    if(!message.member.roles.cache.has(yrol)) return message.channel.send(`Bu komutu kullanabilmek için YETKİLİ ROLÜNE sahip olmalısın.`)
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("**Bir kullanıcı ID girmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`**Bu Kullanıcı Banlanmamış**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(`${user.tag} Adlı Kullanıcının Ban Nedeni **${reason}**`)

    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansor'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgu',
    description: 'Ban sorgulama yaparsınız',
    usage: 'bansorgu'
};