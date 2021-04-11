const Discord = require('discord.js');
const { Database } = require("wio.db");
const  data  = require('wio.db');
const ayarlar = require("../ayarlar.json")
var prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
    const pinkcode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(`${message.author.tag}`)
    .setTitle(`:x: Hatalı Kullanım`)
    .setDescription(`${prefix}uyarı ekle/sil/bilgi Komutlarını Kullan!`)
    .setThumbnail(`${message.author.avatarURL()}`)    


if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return message.channel.send(pinkcode)


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send("`Bir kişiyi etiketlemelisin.`")
if(kullanıcı.bot) return message.channel.send("`Botları uyaramam!`")
if(kullanıcı.id === message.author.id) return message.channel.send("`Kendini uyaramazsın!`")
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send(`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`)}

if(reason) {
await message.channel.send(`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`)
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send("`Bir kişiyi etiketlemelisin!`")
if(kullanıcı.id === message.author.id) return message.channel.send("`Kendi Uyarını Silemezsin`")

let sayı = args[2]
if(!sayı) return message.channel.send("`Silinecek uyarı sayısını yazmadın!`")
if(isNaN(sayı)) return message.channel.send("`Silinecek uyarı sayısını yazmadın!`")
if(sayı === '0') return message.channel.send("`Beni mi kandırmaya çalışıyorsun sen?`")
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send("`Uyarı Sayısından Fazla Silemezsin!`")

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(`${kullanıcı}, uyarısı silindi!\nToplam uyarı sayısı: ${syı ? syı : '0'}`)}

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send("`Bir kişiyi etiketlemelisin.`")

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send("`Kullanıcının Hiç Uyarısı Yok`")
await message.channel.send(`${kullanıcı}: **Toplam uyarı sayısı:** ${syı2 ? syı2 : '0'}`) }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn' , "u" , "uyari" , "üyari"],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}