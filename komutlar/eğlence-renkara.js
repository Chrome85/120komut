const { MessageEmbed } = require("discord.js");
const önEk = require("../ayarlar.json").prefix;
exports.run = (client, message, args) => {
  var Renk = args[0];
  var hata = args[0];
  var narcosrenkResimi = `https://dummyimage.com/1920x1080/${Renk}/ffffff&text=%20`;

  if (!hata) {
    const renkYok = new MessageEmbed()
      .setColor("RED")
      .addField(
        `**${client.user.username} | Renk Komutu**`,
        `Lütfen Bir Renk Belirtin!\nÖrnek: \`${önEk}renk #ffffff\``
      )
      .setFooter(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();

    message.channel.send(renkYok);
  }
  if (Renk) {
    message.channel.send(
      new MessageEmbed()
        .setColor(Renk)
        .setTitle(`**İşte ${args[0]} Rengi**`)
        .setURL(narcosrenkResimi)
        .setImage(narcosrenkResimi)
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["renkara"],
  permLevel: 0
}; 

exports.help = {
  name: "renk"
};