import { Client, GatewayIntentBits, ChannelType } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

const userMessages = new Map();
console.log ("Test");
/*
function getToday() {
  return new Date().toISOString().split('T')[0];
}

function hasPostedToday(userId) {
  if (!userMessages.has(userId)) return false;
  const userRecord = userMessages.get(userId);
  return userRecord.date === getToday();
}

function recordMessage(userId) {
  userMessages.set(userId, { date: getToday() });
}

client.on('ready', () => {
  console.log(`✓ Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot || message.channel.type === ChannelType.DM) return;
*/
  const userId = message.author.id;

  // Date du jour
  const today = new Date().toISOString().slice(0,10);

  // On regarde si une date existe déjà
  const lastDate = lastMessage.get(userId);

  // Si déjà parlé aujourd'hui
  if (lastDate === today) {
    console.log("Seulement un message par jour");
    await message.delete();
    return;
  }

  // Sinon on enregistre
  lastMessage.set(userId, today);
/*
  if (hasPostedToday(userId)) {
    await message.reply({
      content: '❌ You can only post one message per day. Try again tomorrow!',
      allowedMentions: { repliedUser: false },
    });
    await message.delete().catch(() => {});
    return;
  }

  recordMessage(userId);
  await message.react('✅');
  console.log(`✓ ${message.author.username} posted (${getToday()})`);
});
*/
client.login(process.env.DISCORD_TOKEN);
