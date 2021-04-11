const Discord = require("discord.js");
const db = require("croxydb");
 
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "<:sagok:778774307253518366> `İsim ayarlanmamış!`";
  else isimYazi = `<:sagok:778774307253518366> \`${isim}\``;
  
  let favorioyun = db.fetch(`pfavorioyun_${message.author.id}`);
  let favoriYazi;
  if (favorioyun == null) favoriYazi = "<:sagok:778774307253518366> `Oyun ayarlanmamış!`";
  else favoriYazi = `<:sagok:778774307253518366> \`${favorioyun}\``;
  
    let favorişarkı = db.fetch(`pfavorişarkı_${message.author.id}`);
  let favorisYazi;
  if (favorişarkı == null) favorisYazi = "<:sagok:778774307253518366> `Şarkı ayarlanmamış!`";
  else favorisYazi = `<:sagok:778774307253518366> \`${favorişarkı}\``;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = "<:sagok:778774307253518366> `Soy İsim ayarlanmamış!`";
  else soyisimYazi = `<:sagok:778774307253518366> \`${soyisim}\``;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = "<:sagok:778774307253518366> `Cinsiyet ayarlanmamış!`";
  if (cinsiyet == "kız") csYazi = "<:sagok:778774307253518366> `Kız`";
  if (cinsiyet == "erkek") csYazi = "<:sagok:778774307253518366> `Erkek`";
  if (cinsiyet == "yok") csYazi = "<:sagok:778774307253518366> `Belirtmek istemiyor.`";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = "<:sagok:778774307253518366> `Yaş ayarlanmamış!`";
  else yasYazi = `<:sagok:778774307253518366> \`${yas}\``;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = "<:sagok:778774307253518366> `Bayrak Girilmemiş.`";
  else bYazi = `<:sagok:778774307253518366> ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`, user.displayAvatarURL({dynamic : true}))
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
.setImage(user.displayAvatarURL({dynamic : true}))
  .setColor('#f6ff00')
    .addField("『 İsim 』", isimYazi)
    .addField("『 Soy isim 』", soyisimYazi)
    .addField("『 Yaş 』", yasYazi)
    .addField("『 Cinsiyet 』", csYazi)
    .addField("『 Bayrak! 』", bYazi)
    .addField("『 Favori Oyun 』", favoriYazi)
    .addField("『 Favori Şarkı 』", favorisYazi)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};