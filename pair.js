// PAIR.js – Standalone pairing code generator
import { makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, Browsers } from '@whiskeysockets/baileys';
import pino from 'pino';
import readline from 'readline';
import chalk from 'chalk';
import gradient from 'gradient-string';
import cfonts from 'cfonts';

const sessionName = 'session';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.clear();
cfonts.say('PAIRING CODE', { font: 'block', gradient: ['red', 'yellow', 'green'], align: 'center' });
console.log(gradient.rainbow('════════════════════════════════\n'));

const phoneNumber = await new Promise(resolve => {
  rl.question(chalk.cyan('Enter phone number with country code (e.g., 923001234567): '), ans => {
    rl.close();
    resolve(ans.trim().replace(/[^0-9]/g, ''));
  });
});

console.log(chalk.yellow('⏳ Connecting to WhatsApp...'));
const { state, saveCreds } = await useMultiFileAuthState(sessionName);
const { version } = await fetchLatestBaileysVersion();

const sock = makeWASocket({
  version,
  auth: state,
  printQRInTerminal: false,
  browser: Browsers.macOS('Desktop'),
  logger: pino({ level: 'silent' })
});

sock.ev.on('creds.update', saveCreds);

const code = await sock.requestPairingCode(phoneNumber);
console.log(gradient.pastel(`\n✅ Your pairing code: ${code}\n`));
console.log(chalk.green('Open WhatsApp → Settings → Linked Devices → Enter this code.'));
console.log(chalk.magenta('Keep this window open until the connection is established.'));

sock.ev.on('connection.update', (update) => {
  if (update.connection === 'open') {
    console.log(chalk.green.bold('🎉 Successfully connected!'));
    process.exit(0);
  }
  if (update.connection === 'close') {
    console.log(chalk.red('Connection closed. Restart if needed.'));
    process.exit(1);
  }
});