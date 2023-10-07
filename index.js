const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, GatewayIntentBits } = require('discord.js-selfbot-v13');

const guildid = "681797849926860810";
const channelid = "1108853251023052954";

// Intents sans les messages
const intents = new GatewayIntentBits().remove([
  GatewayIntentBits.GuildMessageContent,
  GatewayIntentBits.DirectMessages,
]);

const clients = [
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
  new Client({ ws: { intents: intents }, checkUpdate: false }),
];

// Seul le premier client rejoint le salon vocal
clients[0].on('ready', async () => {
  const connection = joinVoiceChannel({
    channelId: channelid,
    guildId: guildid,
    adapterCreator: clients[0].guilds.cache.get(guildid).voiceAdapterCreator,
    selfDeaf: false,
  });

  connection.on(VoiceConnectionStatus.Ready, () => {
    console.log(`${clients[0].user.username} est en ligne dans le salon vocal!`);
  });
});

const logins = [
  process.env.Rina,
  process.env.Masha,
  process.env.Impo,
  process.env.Sasha,
  process.env.Krime,
  process.env.Himeji,
  process.env.Assia,
  process.env.Frost,
  process.env.Rosie,
  process.env.Enora,
  process.env.Keii,
];

clients.forEach((client, index) => {
  client.login(logins[index]);
});
