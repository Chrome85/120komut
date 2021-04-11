const Discord = require("discord.js");
const moment = require("moment");
const db = require('croxydb');
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "» **Sahibim**","<@477189482206986240>"
  )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
  
  .addField("» **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
    .addField(
      "» **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .setThumbnail(client.user.avatarURL())
  .setImage("https://media.discordapp.net/attachments/704352497422041168/727241966236074054/giphy-5.gif?width=544&height=408")
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**➥ Linkler**", "[<a:kral:778787824018653205> Davet Linki](https://discord.com/oauth2/authorize?client_id=778778531018571776&scope=bot&permissions=8)\n[<a:kral:778787824018653205> Destek Sunucu](https://discord.gg/3T5SHUD)\n[<a:kral:778787824018653205> Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)");
  return message.channel.send(msg);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};