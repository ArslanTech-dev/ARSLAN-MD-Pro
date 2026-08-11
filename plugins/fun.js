// plugins/fun.js – Advanced Fun Commands
export default [
  {
    name: 'truth',
    execute: async (sock, msg, args, { from, sender, pushname, config }) => {
      const truths = [
        'Have you ever lied to your best friend?',
        'What’s the weirdest dream you ever had?',
        'Do you secretly dislike someone in this group?',
        'What’s the most embarrassing thing you’ve done?',
        'If you could be invisible for a day, what would you do?'
      ];
      const reply = `🔮 *Truth for ${pushname}:* \n\n${truths[Math.floor(Math.random() * truths.length)]}`;
      await sock.sendMessage(from, { text: reply, footer: config.FOOTER });
    }
  },
  {
    name: 'dare',
    execute: async (sock, msg, args, { from, sender, pushname, config }) => {
      const dares = [
        'Send a voice note singing your favorite song',
        'Change your profile picture to a random meme for 10 mins',
        'Text your last contact “I love you”',
        'Post “I’m a potato” on your status',
        'Do 10 pushups and send a photo'
      ];
      const reply = `🎭 *Dare for ${pushname}:* \n\n${dares[Math.floor(Math.random() * dares.length)]}`;
      await sock.sendMessage(from, { text: reply, footer: config.FOOTER });
    }
  },
  {
    name: 'hack',
    execute: async (sock, msg, args, { from, config }) => {
      const target = args.join(' ') || 'your device';
      const animations = [
        '🟢 Initializing exploit...',
        '🔍 Scanning for vulnerabilities...',
        '⚡ Injecting payload...',
        '🔓 Access granted!',
        `📦 Downloading data from ${target}...`,
        '✅ Hack complete!'
      ];
      let reply = '*💻 HACK INITIATED...*\n\n';
      for (const step of animations) {
        await sock.sendMessage(from, { text: reply + step, footer: config.FOOTER });
        await new Promise(r => setTimeout(r, 1500));
      }
      await sock.sendMessage(from, { text: `😈 *Successfully hacked ${target}!* \n(JK, it's just a prank)`, footer: config.FOOTER });
    }
  },
  {
    name: 'kiss',
    execute: async (sock, msg, args, { from, sender, pushname, config }) => {
      const target = args[0] ? `@${args[0].replace(/[^0-9]/g, '')}` : pushname;
      const percentage = Math.floor(Math.random() * 101);
      const emoji = percentage > 70 ? '😘💕' : percentage > 40 ? '😗' : '😶';
      await sock.sendMessage(from, {
        text: `💋 *${pushname}* kissed *${target}*\nLove meter: ${percentage}% ${emoji}`,
        mentions: [sender, msg.key.participant || msg.key.remoteJid],
        footer: config.FOOTER
      });
    }
  },
  {
    name: 'jail',
    execute: async (sock, msg, args, { from, sender, pushname, config }) => {
      const reasons = ['Stealing memes', 'Too handsome', 'Spamming', 'Being awesome'];
      const sentence = Math.floor(Math.random() * 50) + 1;
      const reply = `🚔 *ARRESTED!*\n👮 Name: ${pushname}\n📜 Crime: ${reasons[Math.floor(Math.random() * reasons.length)]}\n⛓️ Sentence: ${sentence} years in virtual jail!\n\n😢 Better luck next life.`;
      await sock.sendMessage(from, { text: reply, footer: config.FOOTER });
    }
  },
  {
    name: 'wanted',
    execute: async (sock, msg, args, { from, pushname, config }) => {
      const wantedText = `
 ╔══════════════════╗
 ║  ⚠️ WANTED ⚠️  ║
 ║                 ║
 ║  ${pushname.padEnd(15)} ║
 ║  Reward: $${Math.floor(Math.random() * 100000)}  ║
 ║  Dead or Alive   ║
 ╚══════════════════╝`;
      await sock.sendMessage(from, { text: wantedText, footer: config.FOOTER });
    }
  },
  {
    name: 'gf',
    execute: async (sock, msg, args, { from, pushname, config }) => {
      const names = ['Ayesha', 'Fatima', 'Zara', 'Lily', 'Sophia', 'Emily', 'Aisha'];
      const score = Math.floor(Math.random() * 101);
      const emoji = score > 80 ? '💖' : score > 50 ? '💕' : '💔';
      await sock.sendMessage(from, {
        text: `👩‍❤️‍👨 *Love Calculator*\n\n${pushname} ♡ ${names[Math.floor(Math.random() * names.length)]}\nCompatibility: ${score}% ${emoji}`,
        footer: config.FOOTER
      });
    }
  },
  {
    name: 'futurewife',
    execute: async (sock, msg, args, { from, pushname, config }) => {
      const future = ['A scientist', 'A movie star', 'A hacker', 'Your best friend', 'A mysterious stranger'];
      const years = Math.floor(Math.random() * 10) + 2;
      await sock.sendMessage(from, {
        text: `🔮 *Future Wife Prediction*\n\n${pushname}, you will meet ${future[Math.floor(Math.random() * future.length)]} in ${years} years!\nPrepare yourself.`,
        footer: config.FOOTER
      });
    }
  }
  // Add more fun commands as needed – just append objects with name & execute
];