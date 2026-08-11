// index.js – ARSLAN MD ULTRA V5 with Plugin Support
import {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  delay,
  Browsers
} from '@whiskeysockets/baileys';
import chalk from 'chalk';
import pino from 'pino';
import moment from 'moment-timezone';
import axios from 'axios';
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import express from 'express';
import gradient from 'gradient-string';
import ora from 'ora';
import cfonts from 'cfonts';
import perfNow from 'performance-now';
import * as cheerio from 'cheerio';
import { fileTypeFromBuffer } from 'file-type';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import os from 'os';
import util from 'util';
import fetch from 'node-fetch';
import 'colors';
import { fileURLToPath, pathToFileURL } from 'url';
import { readdirSync } from 'fs';
import readline from 'readline';

import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let botStartTime;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUptime() {
  if (!botStartTime) return '0d 0h 0m 0s';
  const uptime = Date.now() - botStartTime;
  const seconds = Math.floor(uptime / 1000) % 60;
  const minutes = Math.floor(uptime / (1000 * 60)) % 60;
  const hours = Math.floor(uptime / (1000 * 60 * 60)) % 24;
  const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Exact menu as required
const getMenu = () => {
    return `╭─❖ *${config.BOT_NAME} v${config.VERSION}* ❖─╮
│
│ 👑 *Owner* : ${config.BOT_OWNER}
│ ⚡ *Speed* : Ultra Fast
│ 📦 *Total Cmd* : 181
│ 🕒 *Uptime* : ${getUptime()}
│ 🔖 *Prefix* : ${config.PREFIX}
│ 🌍 *Mode* : Public
│ 📊 *Version* : ${config.VERSION}
│
╰─────────────────────────╯

╭─『 🎵 MUSIC 』─╮
│ ➤${config.PREFIX}play
╰─────────────────╯

╭─『 ⬇️ DOWNLOAD 』─╮
│ ➤${config.PREFIX}tiktok
│ ➤${config.PREFIX}tiktok2
│ ➤${config.PREFIX}tiktok3
│ ➤${config.PREFIX}igdl
│ ➤${config.PREFIX}igdl2
│ ➤${config.PREFIX}igdl3
│ ➤${config.PREFIX}fb
│ ➤${config.PREFIX}ytpost
│ ➤${config.PREFIX}mediafire
│ ➤${config.PREFIX}megadl
│ ➤${config.PREFIX}gitclone
│ ➤${config.PREFIX}pinterest
│ ➤${config.PREFIX}ttmp3
│ ➤${config.PREFIX}igmp3
│ ➤${config.PREFIX}video
│ ➤${config.PREFIX}capcut
│ ➤${config.PREFIX}drama
│ ➤${config.PREFIX}tsticker
│ ➤${config.PREFIX}tts
╰─────────────────────────────╯

╭─『 🤖 AI 』─╮
│ ➤${config.PREFIX}gpt
│ ➤${config.PREFIX}chatgpt
│ ➤${config.PREFIX}gemini
│ ➤${config.PREFIX}claudeai
│ ➤${config.PREFIX}deepseek
│ ➤${config.PREFIX}codeai
│ ➤${config.PREFIX}bot
╰───────────────────────────╯

╭─『 👥 GROUP 』─╮
│ ➤${config.PREFIX}tagall
│ ➤${config.PREFIX}kick
│ ➤${config.PREFIX}promote
│ ➤${config.PREFIX}p
│ ➤${config.PREFIX}demote
│ ➤${config.PREFIX}hidetag
│ ➤${config.PREFIX}tagadmins
│ ➤${config.PREFIX}ginfo
│ ➤${config.PREFIX}add
│ ➤${config.PREFIX}invite
│ ➤${config.PREFIX}link
│ ➤${config.PREFIX}join
│ ➤${config.PREFIX}leave
│ ➤${config.PREFIX}out
│ ➤${config.PREFIX}mute
│ ➤${config.PREFIX}unmute
│ ➤${config.PREFIX}end
│ ➤${config.PREFIX}revoke
│ ➤${config.PREFIX}poll
│ ➤${config.PREFIX}newgc
│ ➤${config.PREFIX}delete
│ ➤${config.PREFIX}acceptall
│ ➤${config.PREFIX}rejectall
│ ➤${config.PREFIX}requests
│ ➤${config.PREFIX}accept
│ ➤${config.PREFIX}reject
│ ➤${config.PREFIX}updategdesc
│ ➤${config.PREFIX}updategname
│ ➤${config.PREFIX}groupstatus
│ ➤${config.PREFIX}antibot
│ ➤${config.PREFIX}dismissall
│ ➤${config.PREFIX}gcpp
╰─────────────────────────────╯

╭─『 ⚙️ SETTINGS 』─╮
│ ➤${config.PREFIX}welcome
│ ➤${config.PREFIX}goodbye
│ ➤${config.PREFIX}setwelcome
│ ➤${config.PREFIX}setgoodbye
│ ➤${config.PREFIX}antiedit
│ ➤${config.PREFIX}autoread
│ ➤${config.PREFIX}antilink
│ ➤${config.PREFIX}antidelete
│ ➤${config.PREFIX}recording
│ ➤${config.PREFIX}statusview
│ ➤${config.PREFIX}autoreact
│ ➤${config.PREFIX}anticall
│ ➤${config.PREFIX}anticallmsg
│ ➤${config.PREFIX}autotyping
│ ➤${config.PREFIX}online
│ ➤${config.PREFIX}mode
│ ➤${config.PREFIX}prefix
│ ➤${config.PREFIX}botname
│ ➤${config.PREFIX}ownername
│ ➤${config.PREFIX}ownernumber
│ ➤${config.PREFIX}description
│ ➤${config.PREFIX}botdp
│ ➤${config.PREFIX}stickername
│ ➤${config.PREFIX}settings
│ ➤${config.PREFIX}editpath
│ ➤${config.PREFIX}delpath
│ ➤${config.PREFIX}reactemojis
│ ➤${config.PREFIX}owneremojis
│ ➤${config.PREFIX}adminaction
╰───────────────────────────────╯

╭─『 🔒 SYSTEM 』─╮
│ ➤${config.PREFIX}vv
│ ➤${config.PREFIX}vv2
│ ➤${config.PREFIX}vv3
│ ➤${config.PREFIX}chreact
│ ➤${config.PREFIX}block
│ ➤${config.PREFIX}unblock
│ ➤${config.PREFIX}pair
│ ➤${config.PREFIX}status
│ ➤${config.PREFIX}fullpp
│ ➤${config.PREFIX}forward
│ ➤${config.PREFIX}count
│ ➤${config.PREFIX}countx
╰─────────────────────────╯

╭─『 😂 FUN 』─╮
│ ➤${config.PREFIX}truth
│ ➤${config.PREFIX}dare
│ ➤${config.PREFIX}quote
│ ➤${config.PREFIX}shayari
│ ➤${config.PREFIX}hack
│ ➤${config.PREFIX}technologia
│ ➤${config.PREFIX}bully
│ ➤${config.PREFIX}hug
│ ➤${config.PREFIX}dance
│ ➤${config.PREFIX}kill
│ ➤${config.PREFIX}slap
│ ➤${config.PREFIX}kiss
│ ➤${config.PREFIX}rate
│ ➤${config.PREFIX}character
│ ➤${config.PREFIX}muth
│ ➤${config.PREFIX}fbi
│ ➤${config.PREFIX}jail
│ ➤${config.PREFIX}wanted
│ ➤${config.PREFIX}mafiamember
│ ➤${config.PREFIX}spy
│ ➤${config.PREFIX}criminal
│ ➤${config.PREFIX}gf
│ ➤${config.PREFIX}bf
│ ➤${config.PREFIX}breakup
│ ➤${config.PREFIX}murder
│ ➤${config.PREFIX}kidnap
│ ➤${config.PREFIX}arrest
│ ➤${config.PREFIX}hackercheck
│ ➤${config.PREFIX}richest
│ ➤${config.PREFIX}futurewife
│ ➤${config.PREFIX}ghost
│ ➤${config.PREFIX}villain
╰─────────────────────────────╯

╭─『 🛠️ UTILITY 』─╮
│ ➤${config.PREFIX}uptime
│ ➤${config.PREFIX}praytime
│ ➤${config.PREFIX}timenow
│ ➤${config.PREFIX}date
│ ➤${config.PREFIX}calculate
│ ➤${config.PREFIX}person
│ ➤${config.PREFIX}readmore
│ ➤${config.PREFIX}msg
│ ➤${config.PREFIX}report
│ ➤${config.PREFIX}time
│ ➤${config.PREFIX}img
│ ➤${config.PREFIX}img2
│ ➤${config.PREFIX}gpass
│ ➤${config.PREFIX}iqc
│ ➤${config.PREFIX}trt
│ ➤${config.PREFIX}tiktokstalk
│ ➤${config.PREFIX}yts
│ ➤${config.PREFIX}ytstalk
│ ➤${config.PREFIX}tiny
│ ➤${config.PREFIX}wink
│ ➤${config.PREFIX}laugh
│ ➤${config.PREFIX}smile
│ ➤${config.PREFIX}statuslike
│ ➤${config.PREFIX}ban
│ ➤${config.PREFIX}unban
│ ➤${config.PREFIX}banlist
╰─────────────────────────────╯

╭─『 📦 MAIN 』─╮
│ ➤${config.PREFIX}menu
│ ➤${config.PREFIX}ping
│ ➤${config.PREFIX}ping2
│ ➤${config.PREFIX}alive
│ ➤${config.PREFIX}owner
│ ➤${config.PREFIX}repo
│ ➤${config.PREFIX}sc
│ ➤${config.PREFIX}githubstalk
│ ➤${config.PREFIX}bomber
│ ➤${config.PREFIX}fetch
╰─────────────────────────╯

> *© 2026 POWERED BY ARSLAN TECH'S*`;
};

// --------------------- Plugin Loader ---------------------
const pluginCommands = {};

async function loadPlugins() {
  const pluginPath = path.join(__dirname, 'plugins');
  try {
    const files = readdirSync(pluginPath).filter(f => f.endsWith('.js'));
    console.log(chalk.yellow(`🔌 Loading ${files.length} plugin(s)...`));
    for (const file of files) {
      const modulePath = pathToFileURL(path.join(pluginPath, file)).href;
      const mod = await import(modulePath);
      if (mod.default && Array.isArray(mod.default)) {
        for (const cmd of mod.default) {
          if (cmd.name && typeof cmd.execute === 'function') {
            pluginCommands[cmd.name] = cmd;
            console.log(chalk.green(`  ✔ Loaded command: ${config.PREFIX}${cmd.name}`));
          }
        }
      }
    }
    console.log(chalk.cyan(`✅ Total plugin commands loaded: ${Object.keys(pluginCommands).length}`));
  } catch (e) {
    console.log(chalk.red('⚠️  No plugins folder found or error loading plugins.'));
  }
}

// --------------------- Command Handler ---------------------
async function handleCommand(command, msg, sock, args) {
  const from = msg.key.remoteJid;
  const sender = msg.key.participant || msg.key.remoteJid;
  const pushname = msg.pushName || 'User';
  const quoted = msg;

  // Plugins first
  if (pluginCommands[command]) {
    try {
      await pluginCommands[command].execute(sock, msg, args, { from, sender, pushname, quoted, config });
      return;
    } catch (err) {
      console.error(chalk.red(`Plugin error (${command}):`), err);
      await sock.sendMessage(from, { text: `💥 Plugin error: ${err.message}` });
      return;
    }
  }

  // Built-in fallback
  try {
    switch (command) {
      case 'menu':
        await sock.sendMessage(from, { image: { url: config.BOT_LOGO }, caption: getMenu(), footer: config.FOOTER });
        break;
      case 'ping': {
        const start = perfNow();
        await sock.sendMessage(from, { text: 'Pinging...' });
        const end = perfNow();
        await sock.sendMessage(from, { text: `🏓 Pong! Speed: ${(end - start).toFixed(2)}ms` });
        break;
      }
      case 'ping2':
        await sock.sendMessage(from, { text: '🏓 Pong Pong!' });
        break;
      case 'alive':
        await sock.sendMessage(from, { text: `🤖 *${config.BOT_NAME}* is alive!\n⏱ Uptime: ${getUptime()}\n👑 Owner: ${config.BOT_OWNER}\n\n${config.FOOTER}` });
        break;
      case 'owner':
        await sock.sendMessage(from, {
          contacts: { displayName: config.BOT_OWNER, contacts: [{ vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${config.BOT_OWNER}\nTEL;type=CELL;waid=${config.OWNER_NUMBER}:+${config.OWNER_NUMBER}\nEND:VCARD` }] }
        });
        break;
      case 'repo':
      case 'sc':
        await sock.sendMessage(from, { text: `📂 *Source Code:*\n${config.GITHUB}` });
        break;
      case 'githubstalk':
        await sock.sendMessage(from, { text: '👤 GitHub Stalk – coming soon' });
        break;
      case 'bomber':
        await sock.sendMessage(from, { text: '💣 Bomber – coming soon' });
        break;
      case 'fetch': {
        if (!args.length) return sock.sendMessage(from, { text: `Usage: ${config.PREFIX}fetch <url>` });
        try {
          const res = await fetch(args[0]);
          const data = await res.text();
          await sock.sendMessage(from, { text: data.substring(0, 1000) });
        } catch (e) {
          await sock.sendMessage(from, { text: `❌ Error: ${e.message}` });
        }
        break;
      }
      case 'play': {
        if (!args.length) return sock.sendMessage(from, { text: `Usage: ${config.PREFIX}play <song name>` });
        const query = args.join(' ');
        const spinner = ora('Searching...').start();
        try {
          const searchResult = await yts(query);
          const video = searchResult.videos[0];
          if (!video) { spinner.stop(); return sock.sendMessage(from, { text: '❌ No results found' }); }
          spinner.text = `Downloading ${video.title}`;
          await sock.sendMessage(from, { text: `🎵 *Downloading:* ${video.title}\n⏳ Please wait...` });
          const stream = ytdl(video.url, { filter: 'audioonly', quality: 'highestaudio' });
          const chunks = [];
          stream.on('data', chunk => chunks.push(chunk));
          stream.on('end', async () => {
            const buffer = Buffer.concat(chunks);
            await sock.sendMessage(from, { audio: buffer, mimetype: 'audio/mp4', ptt: false, fileName: `${video.title}.mp3` }, { quoted: msg });
            spinner.succeed('Sent!');
          });
          stream.on('error', async (err) => {
            spinner.fail('Download failed');
            await sock.sendMessage(from, { text: `❌ Error: ${err.message}` });
          });
        } catch (err) {
          spinner.fail(err.message);
          await sock.sendMessage(from, { text: `❌ Error: ${err.message}` });
        }
        break;
      }
      case 'uptime':
        await sock.sendMessage(from, { text: `⏱ Uptime: ${getUptime()}` });
        break;
      case 'praytime':
      case 'timenow':
      case 'date':
        await sock.sendMessage(from, { text: `🕒 ${moment().tz('Asia/Karachi').format('llll')}` });
        break;
      case 'calculate': {
        if (!args.length) return sock.sendMessage(from, { text: `Usage: ${config.PREFIX}calculate <expression>` });
        try {
          const result = eval(args.join(' '));
          await sock.sendMessage(from, { text: `🧮 Result: ${result}` });
        } catch (e) {
          await sock.sendMessage(from, { text: '❌ Invalid expression' });
        }
        break;
      }
      default:
        await sock.sendMessage(from, { text: `❓ Unknown command: ${command}. Add it via plugins or update index.js.` });
    }
  } catch (err) {
    console.error(chalk.red('Handler error:'), err);
    await sock.sendMessage(from, { text: `💥 Critical error: ${err.message}` });
  }
}

// --------------------- Bot Initialization ---------------------
async function startBot() {
  await loadPlugins();
  const { state, saveCreds } = await useMultiFileAuthState(config.SESSION_NAME);
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: false,
    browser: Browsers.macOS('Desktop'),
    logger: pino({ level: 'silent' })
  });

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const phoneNumber = await new Promise(resolve => {
    rl.question(chalk.blue('Enter your phone number with country code (e.g., 923164104976): '), answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
  const code = await sock.requestPairingCode(phoneNumber);
  console.log(chalk.green.bold(`Your pairing code: ${code}`));
  console.log(chalk.yellow('Enter this code in WhatsApp (Linked Devices) to connect.'));

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'open') {
      console.log(chalk.green('✅ Connected successfully!'));
      botStartTime = Date.now();
    }
    if (connection === 'close') {
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
      console.log(chalk.red(`Connection closed. Reconnecting: ${shouldReconnect}`));
      if (shouldReconnect) startBot();
      else { console.log(chalk.red('Logged out. Delete session folder and restart.')); process.exit(1); }
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue;
      const delayTime = getRandomInt(config.ANTI_BAN_DELAY.min, config.ANTI_BAN_DELAY.max);
      await delay(delayTime);
      const jid = msg.key.remoteJid;
      const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
      await sock.readMessages([msg.key]);
      sock.presenceSubscribe(jid);
      await delay(500);
      if (!text.startsWith(config.PREFIX)) continue;
      const args = text.slice(config.PREFIX.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
      await handleCommand(command, msg, sock, args);
    }
  });
}

// Express server
const app = express();
app.get('/', (req, res) => res.send('Bot is Alive'));
app.listen(config.PORT, () => console.log(chalk.green(`🌐 Server running on port ${config.PORT}`)));

console.clear();
cfonts.say('ARSLAN MD ULTRA V5', {
  font: 'block',
  gradient: ['red', 'yellow', 'green', 'blue'],
  align: 'center'
});
console.log(gradient.rainbow('════════════════════════════════'));
console.log(chalk.cyan(`RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB | CPU: ${os.cpus()[0].model.split(' @')[0]} | Node: ${process.version}`));

process.on('uncaughtException', err => console.error(chalk.red('Uncaught Exception:'), err));
process.on('unhandledRejection', reason => console.error(chalk.red('Unhandled Rejection:'), reason));

startBot();