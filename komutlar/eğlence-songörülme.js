exports.run = async (Bastion, message, args) => {
    try {
      let user;
      if (message.mentions.users.cache.size) {
        user = message.mentions.users.first();
      } else if (args.id) {
        user = await message.guild.members.fetch(args.id);
        if (user) {
          user = user.user;
        }
      }
      if (!user) {
        return message.reply("**Doğru Kullanım**: +bilgi <kişi>");
      }

      let color, description;
      if (user.lastMessageID) {
        let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
        let seconds = lastSeen / 1;
        let days = parseInt(seconds / 86400);
        seconds = seconds % 86400;
        let hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        let minutes = parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
  
        lastSeen = `${seconds} Saniye`;
        if (days) {
          lastSeen = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
        } else if (hours) {
          lastSeen = `${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
        } else if (minutes) {
          lastSeen = `${minutes} Dakika /${seconds} Saniye`;
        }
  
        color = 0x00ae86;
        description = "**Son Görülme:** " + lastSeen;
      } else {
        color = 0x00ae86;
        description = "**Hiç Görülmedi** ";
      }
  
      message.channel
        .send({
          embed: {
            color: color,
            title: "Son Görülme",
            description: description
          }
        })
        .catch(e => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["songörülme", "üyegörülme"],
    permLevel: 0
  };
  
  exports.help = {
    name: "bilgi",
    description: "Etiketlenen Kişinin Son Görülme Zamanını Belirtir.",
    usage: "bilgi <kişi>"
  };