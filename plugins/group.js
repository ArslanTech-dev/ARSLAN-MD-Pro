// plugins/group.js – Group Administration Commands
export default [
  {
    name: 'tagall',
    execute: async (sock, msg, args, { from, pushname, config }) => {
      if (!from.endsWith('@g.us')) return sock.sendMessage(from, { text: '❌ This command only works in groups!', footer: config.FOOTER });
      const metadata = await sock.groupMetadata(from);
      const participants = metadata.participants;
      let tagMsg = `📢 *ATTENTION EVERYONE!*\n🗣 Message from: ${pushname}\n\n`;
      participants.forEach(p => { tagMsg += `@${p.id.split('@')[0]} `; });
      if (args.length) tagMsg += `\n\n💬 ${args.join(' ')}`;
      await sock.sendMessage(from, { text: tagMsg, mentions: participants.map(p => p.id), footer: config.FOOTER });
    }
  },
  {
    name: 'kick',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
      if (mentioned.length === 0) return sock.sendMessage(from, { text: '⚠️ Mention someone to kick!' });
      await sock.groupParticipantsUpdate(from, mentioned, 'remove');
      await sock.sendMessage(from, { text: `👢 Kicked: @${mentioned[0].split('@')[0]}`, mentions: [mentioned[0]], footer: config.FOOTER });
    }
  },
  {
    name: 'promote',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
      if (mentioned.length === 0) return sock.sendMessage(from, { text: '⚠️ Mention someone to promote!' });
      await sock.groupParticipantsUpdate(from, mentioned, 'promote');
      await sock.sendMessage(from, { text: `⭐ Promoted: @${mentioned[0].split('@')[0]}`, mentions: [mentioned[0]], footer: config.FOOTER });
    }
  },
  {
    name: 'demote',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
      if (mentioned.length === 0) return sock.sendMessage(from, { text: '⚠️ Mention someone to demote!' });
      await sock.groupParticipantsUpdate(from, mentioned, 'demote');
      await sock.sendMessage(from, { text: `⬇️ Demoted: @${mentioned[0].split('@')[0]}`, mentions: [mentioned[0]], footer: config.FOOTER });
    }
  },
  {
    name: 'hidetag',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const metadata = await sock.groupMetadata(from);
      const participants = metadata.participants;
      const message = args.join(' ') || '👀 Hidden mention';
      await sock.sendMessage(from, { text: message, mentions: participants.map(p => p.id), footer: config.FOOTER });
    }
  },
  {
    name: 'tagadmins',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const metadata = await sock.groupMetadata(from);
      const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
      let tag = '👑 *Group Admins:*\n';
      admins.forEach(a => tag += `@${a.split('@')[0]} `);
      await sock.sendMessage(from, { text: tag, mentions: admins, footer: config.FOOTER });
    }
  },
  {
    name: 'ginfo',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const metadata = await sock.groupMetadata(from);
      const created = new Date(metadata.creation * 1000).toLocaleString();
      const reply = `📋 *Group Info*\n\n` +
        `🔹 Name: ${metadata.subject}\n` +
        `🔹 ID: ${metadata.id}\n` +
        `🔹 Created: ${created}\n` +
        `🔹 Members: ${metadata.participants.length}\n` +
        `🔹 Owner: @${metadata.owner.split('@')[0]}\n` +
        `🔹 Description: ${metadata.desc || 'None'}`;
      await sock.sendMessage(from, { text: reply, mentions: [metadata.owner], footer: config.FOOTER });
    }
  },
  {
    name: 'link',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      const code = await sock.groupInviteCode(from);
      await sock.sendMessage(from, { text: `🔗 Group Link:\nhttps://chat.whatsapp.com/${code}`, footer: config.FOOTER });
    }
  },
  {
    name: 'mute',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      await sock.groupSettingUpdate(from, 'announcement');
      await sock.sendMessage(from, { text: '🔇 Group muted (only admins can send).', footer: config.FOOTER });
    }
  },
  {
    name: 'unmute',
    execute: async (sock, msg, args, { from, config }) => {
      if (!from.endsWith('@g.us')) return;
      await sock.groupSettingUpdate(from, 'not_announcement');
      await sock.sendMessage(from, { text: '🔊 Group unmuted.', footer: config.FOOTER });
    }
  }
  // Add other group commands similarly
];