import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> cd && termux-setup-storage
> apt-get update -y && apt-get upgrade -y
> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
> git clone https://github.com/NKMODS/Zenitsu-termux.git && cd Zenitsu-termux 
> yarn install 
> npm install
> npm update
> npm install 
> npm start` 
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Zenitsu Bot', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/NKMODS/Zenitsu-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
