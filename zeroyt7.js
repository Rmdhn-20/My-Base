//NEW BASE BY ZERO YT7
//RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
//MAAF BASE NYA JELEK
//RECODE BY EKUZIQ
//CANTUMIN NAMA GUE JUGA AJG

//FOLLOW ALL SOSIAL MEDIAML ME
//YOUTUBE : Zero YT7
//INSTAGRAM : @Zero_YT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

//FOLLOW JUGA SOSMED GUE
//INSTAGRAM : @ekuzikaa_18
//TIKTOD : @ekuzika
//GITHUB : Rmdhn-20

let { fetchJson, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ZeksApi = setting.zeksKey
ownername = setting.OwnerName
DapKey = setting.DapKey
banChats = false;

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = zeroyt7.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `0`, '0', '0', '0']
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await zeroyt7.chats.all()
		let groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: '[ ⏳ ] Sabar ...',
			success: '[ ✓ ] Done ...',
			error: {
				stick: 'Gagal Convert Gambar To Sticker... Coba Lagi !',
				Iv: 'Linknya Error !'
			},
			only: {
				admin: 'Kusus Admin !',
				group: 'Khusus Group !'
			}
		}
		faketeks = '⌜ ExZBotZ ⌟\n© By EkuziQ'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        ///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ikyy.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        let fakestatus = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        let fakegroup = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        let ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `Follow IG @ekuzikaa_18`, 
                            orderTitle: `Follow IG @ekuzikaa_18`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
    case 'help':
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
                   timestamp = speed();
                latensi = speed() - timestamp	
                var sts = await zeroyt7.getStatus(sender)
                const bio = sts
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨
Saya ${botname} Siap Membantu...

╭─❒ 「 Bot Info 」 ❒
├ Nama Bot : ${botname}
├ Nama Owner : ${ownername}
├ Prefix : ⌜ Multi Prefix ⌟
├ Nomor Owner : @${owner.split('@')[0]}
├ Runtime : ${runtime(process.uptime())}
├ Language : Javascript & Nodejs
├ Library : Baileys
├ Totan Pengguna : ${pendaftar.length}
├ Speed : ${latensi.toFixed(4)} second
└❏

╭─❒ 「 User Info 」 ❒
├ Status : ${isOwner ? 'Owner 🔰' : 'User ✓'}
├ Nama User : ${pushname}
├ Nomor User : @${sender.split('@')[0]}
├ Bio User : ${bio.status}
└❏

╭─⬣「 Group Menu 」⬣
│ あ ${prefix}antilink [on/off]
│ あ ${prefix}welcome [on/off]
│ あ ${prefix}antivirtex [on/off]
│ あ ${prefix}group [buka/tutup]
│ あ ${prefix}linkgrup
│ あ ${prefix}promote [@tag]
│ あ ${prefix}demote [@tag]
│ あ ${prefix}add [628xx]
│ あ ${prefix}kick [@tag]
│ あ ${prefix}setpp
│ あ ${prefix}setdesc
│ あ ${prefix}setname
│ あ ${prefix}hidetag
└⬣

╭─⬣「 Sticker Menu 」⬣
│ あ ${prefix}attp [teks]
│ あ ${prefix}ttp [teks]
│ あ ${prefix}toimg [kirim/reply stiker]
│ あ ${prefix}sticker [kirim/reply img]
│ あ ${prefix}tomp3 [reply video]
│ あ ${prefix}tovideo [reply stiker]
└⬣

╭─⬣「 Sosmed Menu 」⬣
│ あ ${prefix}ytmp4 [link]
│ あ ${prefix}ytmp3 [link]
│ あ ${prefix}ytshort [link]
│ あ ${prefix}play [query]
│ あ ${prefix}tiktok [link]
│ あ ${prefix}tiktoknowm [link]
│ あ ${prefix}tiktokaudio [link]
│ あ ${prefix}igfoto [link]
│ あ ${prefix}igvideo [link]
│ あ ${prefix}igreels [link]
│ あ ${prefix}fbvid [link]
│ あ ${prefix}twitvideo [link]
└⬣

╭─⬣「 Stalker Menu 」⬣
│ あ ${prefix}igstalk [Username]
│ あ ${prefix}tiktokstalk [Username]
│ あ ${prefix}igstory [Username]
└⬣

╭─⬣「 Random Menu 」⬣
│ あ ${prefix}quotes
│ あ ${prefix}quote
│ あ ${prefix}katabijak
│ あ ${prefix}bucin
│ あ ${prefix}cerpen
│ あ ${prefix}pantun
│ あ ${prefix}estetik
│ あ ${prefix}quoteyt
│ あ ${prefix}darkjoke
│ あ ${prefix}ppcp
│ あ ${prefix}bucin
│ あ ${prefix}chord
│ あ ${prefix}motivasi
│ あ ${prefix}tinyurl
│ あ ${prefix}pinterest
│ あ ${prefix}storyanime
└⬣
	
╭─⬣「 Info Menu 」⬣
│ あ ${prefix}owner
│ あ ${prefix}bc
│ あ ${prefix}report
│ あ ${prefix}infobot
└⬣`
teks =
`WhatsApp : wa.me/6289618777587\nGithub : github.com/Rmdhn-20\nIG : instagram.com/ekuzikaa_18`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'infobot':
timestamp = speed();
				latensi = speed() - timestamp
                  	teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Zero YT7
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : ⌜ Multi Prefix ⌟
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┃┃* Library : Baileys
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To EkuziQ (Owner)*
*┃◗ Thanks To All Subscriberku*
*┗━━━━━━━ •*`
                  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
          { buttonId: `${prefix}menu`, buttonText: { displayText: '☰ MENU' }, type: 1 }
        ]
        sendButton(from, teks, '© Created : EkuziQ', but, mek)
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`[ ✓ ] Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`[ ✓ ] Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`[ ✓ ] Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`[ ✓ ] Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`[ ✓ ] Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`[ ✓ ] Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`[ ✓ ] Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`[ ✓ ] Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`[ ✓ ] Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`[ ✓ ] Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`[ ✓ ] Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
case 'h':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
sendStickerFromUrl(from, `http://leyscoders-api.herokuapp.com/api/textto-image?text=${q}`)
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `[  ✓  ] Done...`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `[  ✓  ] Done...`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: '[  ✓  ] Done...' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM ]━━━━━━━━━━━━━━━━━//

case 'quotes':
    p = await fetchJson('https://api.zekais.com/quotes?apikey=zekais')
    quot = `Author : ${ownername}\n\n${p.quotes}`
    but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}quotes`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButton(from, quot, faketeks, but, mek)
    break

case 'katabijak':
    ini = await fetchJson('https://api.zekais.com/bijak?apikey=zekais')
    bi = `Author : ${ownername}\n\n${ini.result}`
    but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}katabijak`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButton(from, bi, faketeks, but, mek)
    break

case 'bucin':
    itu = await fetchJson('https://api.zekais.com/bucin?apikey=zekais')
    bo = `Author : ${ownername}\n\n${itu.result}`
    but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}bucin`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButton(from, bo, faketeks, but, mek)
    break

case 'cerpen':
    he = await fetchJson('https://api.zekais.com/cerpen?apikey=zekais')
    be = `Title: ${he.title}\nAuthor: ${he.pengarang}\nCategory: ${he.category}\n\n${he.post}`
    reply(be)
    break

case 'pantun':
    ii = await fetchJson('https://api-xcoders.xyz/api/random/pantun?apikey=cyXNcMnw3x')
    io = ii.result
    but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}pantun`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButton(from, io, faketeks, but, mek)
    break

case 'estetik':
    inu = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=${ZeksApi}`)
    but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}estetik`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButImage(from, 'Nih estetek nya', faketeks, inu, but)
    break

	case 'quote':
	    ihi = await fetchJson(`https://api.dapuhy.ga/api/fun/quoteslucu?apikey=${DapKey}`)
	    op = ihi.quotes
	    but = [
        	{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        	{ buttonId: `${prefix}pantun`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    	    ]
    sendButton(from, op, faketeks, but, mek)
    break

	case 'quoteyt':
		bufff = await getBuffer(`https://api.dapuhy.ga/api/randomimage/quotesyt?apikey=${DapKey}`)
		zeroyt7.sendMessage(from, bufff, image, { quoted: ftrol, caption: ':)' })
	    break
		
	case 'darkjoke':
	case 'darkjokes':
		getb = await getBuffer(`https://api.dapuhy.ga/api/randomimage/darkjokes?apikey=${DapKey}`)
		but = [
			{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
			{ buttonId: `${prefix}pantun`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
		    ]
	    sendButImage(from, 'Dark:v', faketeks, getb, but, mek)
	    break
		
	case 'ppcp':
	case 'ppcouple':
		rnya = await fetchJson(`https://api.dapuhy.ga/api/randomimage/couple?apikey=${DapKey}`)
		pria = await getBuffer(rnya.result.pria)
		wanita = await getBuffer(rnya.result.wanita)
		zeroyt7.sendMessage(from, pria, image, {quoted:mek})
		zeroyt7.sendMessage(from, wanita, image, {quoted:mek})
		break

case 'chord':
if (args.length < 1) return reply('Chord apa yg mau di cari gblk?')
chor = await fetchJson(`https://zenzapi.xyz/api/chordlagu?query=${q}&apikey=exz123`)
res = chor.result.result
reply(res)
break

case 'motivasi':
moti = await fetchJson('https://zenzapi.xyz/api/motivasi?apikey=exz123')
motires = moti.result.message
but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
        { buttonId: `${prefix}motivasi`, buttonText: { displayText: '☰ NEXT' }, type: 1 }
    ]
    sendButton(from, motires, faketeks, but, mek)
    break
    
case 'bucin':
buc = await fetchJson('https://zenzapi.xyz/api/bucinquote?apikey=exz123')
bucin = buc.result.message
but = [
        { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1},
        { buttonId: `${prefix}bucin`, buttonText: { displayText: '☰ NEXT' }, type: 1}
    ]
     sendButton(from, bucin, faketeks, but, mek)
     break

case 'pinterest':
    if (args.length < 1) return reply('Apa yang mau dicari?')
    dires = await getBuffer(`https://api.dapuhy.ga/api/search/pinterest-image?query=${q}&apikey=${DapKey}`)
    zeroyt7.sendMessage(from, dires, image, {quoted:mek, caption: 'nie..'})
    break

case 'tinyurl':
    if (args.length < 1) return reply('Mana link nya..')
    vv = await fetchJson(`https://api.dapuhy.ga/api/others/tinyurl?url=${q}&apikey=${DapKey}`)
    mq = vv.result
    reply(mq)
    break

case 'storyanime':
    reply(mess.wait)
    eee = await getBuffer(`https://api.dapuhy.ga/api/anime/storyanime?apikey=${DapKey}`)
    zeroyt7.sendMessage(from, eee, video, {quoted:ftrol})
    break

//━━━━━━━━━━━━━━━[ FITUR SOSMED ]━━━━━━━━━━━━━━━━━//

case 'play':
    if (args.length < 1) return reply('Judul nya?')
    i = await fetchJson(`https://api-xcoders.xyz/api/download/playmp4?query=${q}&apikey=cyXNcMnw3x`)
    au = i.result
    ua = `Judul : ${au.title}\nDurasi : ${au.duration}\nSize : ${au.size}`
    v = await getBuffer(au.url)
    zeroyt7.sendMessage(from, v, video, { caption : ua })
    break
case 'ytmp3':
case 'audio':
    if (args.length < 1) return reply('Link?')
    reply(mess.wait)
    yu = await fetchJson(`https://api.zekais.com/youtube?url=${q}&apikey=lbLbxbVw`)
    let url = await getBuffer(yu.audio[0].url)
    zeroyt7.sendMessage(from, url, audio, {quoted:ftrol})
    break

case 'ytmp4':
case 'video':
    if (args.length < 1) return reply('Link?')
    reply(mess.wait)
    ut = await fetchJson(`https://api.zekais.com/youtube?url=${q}&apikey=lbLbxbVw`)
    let aha = await getBuffer(ut.video[0].url)
    zeroyt7.sendMessage(from, aha, video, {quoted:ftrol})
    break

case 'tiktok':
case 'ttdl':
    if (args.length < 1) return reply('link?')
    ruh = await fetchJson(`https://zenzapi.xyz/api/downloader/tiktok?url=${q}&apikey=exz123`)
    rr = await getBuffer(ruh.result.watermark)
    reply(mess.wait)
    zeroyt7.sendMessage(from, rr, video, {quoted:ftrol})
break

case 'tiktoknowm':
case 'ttnowm':
    if (args.length < 1) return reply('link?')
    TOl = await fetchJson(`https://zenzapi.xyz/api/downloader/tiktok?url=${q}&apikey=exz123`)
    Til = await getBuffer(TOl.result.nowatermark)
    reply(mess.wait)
    zeroyt7.sendMessage(from, Til, video, {quoted:ftrol})
break

case 'tiktokaudio':
case 'ttaudio':
    if (args.length < 1) return reply('link?')
    memk = await fetchJson(`https://zenzapi.xyz/api/downloader/tiktok?url=${q}&apikey=exz123`)
    itil = await getBuffer(memk.result.audio)
    reply(mess.wait)
    zeroyt7.sendMessage(from, itil, audio, {quoted:ftrol})
break		
	case 'igfoto':
	    if (args.length < 1) return reply('Link?')
	    gege = await fetchJson(`https://zenzapi.xyz/api/downloader/instagram?url=${q}&apikey=exz123`)
	    username = gege.result.caption.username
	    like = gege.result.caption.total_like
	    comment = gege.result.caption.total_comment
	    desc = gege.result.caption.desc
	    ini_text = `+ Username : ${username}\n+ Like : ${like}\n+ Comment : ${comment}\n+ Description : ${desc}\n`
	    ngebuff = await getBuffer(gege.result.link)
	    reply(mess.wait)
	    zeroyt7.sendMessage(from, ngebuff, image, { caption : ini_text })
		break
case 'igvideo':
case 'igreels':
	    if (args.length < 1) return reply('Link?')
	    aaa = await fetchJson(`https://zenzapi.xyz/api/downloader/instagram?url=${q}&apikey=exz123`)
	    let { username, total_views, total_plays, total_comment, like, durasi } = aaa.result.caption
	    teex = `+ Username : ${username}\n+ Like : ${like} \n+ Views : ${total_views}\n+ Comment : ${total_comment}\n+ Play : ${total_plays}\n+ Duration : ${durasi}\n`
	    bufnya = await getBuffer(aaa.result.link)
	    reply(mess.wait)
	    zeroyt7.sendMessage(from, bufnya, video, { caption : teex })
		break
	case 'fb':
	case 'fbvid':
	case 'fbvideo':
	if (args.length < 1) return reply('Link?')
	babi = await fetchJson(`https://api.xteam.xyz/dl/fbv2?url=${q}&APIKEY=483b65681fe3dfb7`)
	babo = babi.result
	teksnyi = `Source : ${babo.meta.source}\nDuration : ${babo.meta.duration}\n\n _Tunggu sebentar, media sedang dikirim_`
	ftny = await getBuffer(babo.thumb)
	vidnya = await getBuffer(babo.hd.url)
	zeroyt7.sendMessage(from, ftny, image, { caption : teksnyi })
	zeroyt7.sendMessage(from, vidnya, video, { quoted : ftrol })
	break
case 'fb2':
case 'fbvid2':
case 'fbvideo2':
    if (args.length < 1) return reply('Mana link nya')
    anj = await fetchJson(`https://api-xcoders.xyz/api/download/fb?url=${q}&apikey=cyXNcMnw3x`)
    tai = await getBuffer(anj.result.data.url)
    zeroyt7.sendMessage(from, tai, video, {quoted:mek})
case 'ytshort':
    if (args.length < 1) return reply('link?')
    ehm = await fetchJson(`https://api-xcoders.xyz/api/download/ytshort?url=${q}&apikey=cyXNcMnw3x`)
    ehe = ehm.result
    ttex = `*>* Judul : ${ehe.title}\n*>* Durasi : ${ehe.duration}\n*>* Size : ${ehe.size}\n\n_Tunggu sebentar, media sedang dikirim_`
    imge = await getBuffer(ehe.thumbnail)
    urr = await getBuffer(ehe.url)
    zeroyt7.sendMessage(from, imge, image, { caption : ttstalk })
    reply(mess.wait)
    zeroyt7.sendMessage(from, urr, video, { quoted: ftrol })
    break
case 'twitvid':
case 'twitvideo':
    if (argan.length < 1) return reply('Link?')
    ttw = await fetchJson(`https://api-xcoders.xyz/api/download/twitter?url=${q}&apikey=cyXNcMnw3x`)
    tww = ttw.result.desc
    buh = await getBuffer(ttw.result.thumb)
    bww = await getBuffer(tww.result.SD)
    zeroyt7.sendMessage(from, buh, image, { caption : tww })
    reply(mess.wait)
    zeroyt7.sendButton(from, bww, video, { quoted : ftrol })
    break

//━━━━━━━━━━━━━━━[ FITUR STALKER ]━━━━━━━━━━━━━━━━//

case 'igstalk':
case 'igstalker':
case 'stalkig':
    if (args.length < 1) return reply('Username nya?')
    apiny = await fetchJson(`https://zenzapi.xyz/api/stalker/ig2?username=${q}&apikey=exz123`)
    txtny = `• Username : ${apiny.result.username}\n• Full Name : ${apiny.result.fullName}\n• Bio : ${apiny.result.biography}\n• Followers : ${apiny.result.followers}\n• Following : ${apiny.result.following}`
    ppnya = await getBuffer(apiny.result.profilePic)
    reply(mess.wait)
    zeroyt7.sendMessage(from, ppnya, image, { caption : txtny })
    break
case 'tiktokstalk':
case 'ttstalk':
case 'stalktiktok':
case 'stalktt':
    if (args.length < 1) return reply('Username nya?')
    l = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${q}&apikey=dappakntlll`)
    resnn = `× Username : ${l.result.user.uniqueId}\n× NickName : ${l.result.user.nickname}\n× Followers : ${l.result.stats.followerCount}\n× Following : ${l.result.stats.followingCount}\n× Bio : ${l.result.user.signature}`
    dibuff = await getBuffer(l.result.avatarLarger)
    reply(mess.wait)
    zeroyt7.sendMessage(from, dibuff, image, { caption : resnn })
    break
case 'igstory':
case 'storyig':
    if (args.length < 1) return reply('Username?')
    storyny = await fetchJson(`https://api-xcoders.xyz/api/download/igstory?username=${q}&apikey=cyXNcMnw3x`)
    r = storyny.result
    typeny = r.type
    b = await getBuffer(r.url)
    zeroyt7.sendMessage(from, b, video, {quoted:mek})
    zeroyt7.sendMessage(from, b, image, {quoted:mek})
    break
    
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'EkuziQ',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${botname}} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.yt', buttonText: {displayText: '☰ YOUTUBE'}, type: 1},
  {buttonId: '.ig', buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
  {buttonId: '.tt', buttonText: {displayText: '☰ TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await zeroyt7.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6289618777587@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'yt':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'ig':
teks =
`Nih Instagram Creator Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7
Yang Ini Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/ekuzikaa_18`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tt':
teks =
`Nih Tiktok Creator Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7
Yang Ini Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@ekuzika`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Menggunakan Sourcecode*
╭─────────────────────
├ Sc Ori = https://github.com/Zero-YT7/Base-ZeroYT7
├ Sc Recode = https://github.com/Rmdhn-20/My-Base
├─────────────────────
├ Creator Base = Zero YT7
├ Owner Sc = EkuziQ
└─────────────────────`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'public':
        	  if (!mek.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              reply(`Sukses mode publik gan`)
              break
case "set":
case "mode":
        if (!mek.key.fromMe) return;
        sendButton(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `⬡ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `⬡ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
	      case 'self':
              if (!mek.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              reply(`Success mode self gan`)
              break

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
case "runtime":
case "test":
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${kyun(run)}*\n*${ssd}*\n*Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
