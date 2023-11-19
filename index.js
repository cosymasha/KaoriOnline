const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');

module.exports = {
   clientOptions: {
      disabledEvents: [
         'TYPING_START',
         'VOICE_SERVER_UPDATE',
         'RELATIONSHIP_ADD',
         'RELATIONSHIP_REMOVE',
         'GUILD_ROLE_DELETE',
         'GUILD_ROLE_UPDATE',
         'GUILD_BAN_ADD',
         'GUILD_BAN_REMOVE',
         'CHANNEL_UPDATE',
         'CHANNEL_PINS_UPDATE',
         'MESSAGE_DELETE',
         'MESSAGE_UPDATE',
         'MESSAGE_DELETE_BULK',
         'MESSAGE_REACTION_ADD',
         'MESSAGE_REACTION_REMOVE',
         'GUILD_MEMBER_UPDATE',
         'GUILD_MEMBERS_CHUNK',
         'GUILD_ROLE_CREATE',
         'MESSAGE_REACTION_REMOVE_ALL',
         'USER_UPDATE',
         'USER_NOTE_UPDATE',
         'USER_SETTINGS_UPDATE',
         'PRESENCE_UPDATE',
         'VOICE_STATE_UPDATE',
         'GUILD_UPDATE',
         'GUILD_MEMBER_ADD',
         'GUILD_MEMBER_REMOVE'
      ],
      messageEditHistoryMaxSize: 1,
      messageSweepInterval: 1,
      messageCacheLifetime: 1,
      messageCacheMaxSize: 1,
      cacheChannels: true,
      restTimeOffset: 0,
      presence: { afk: true }
   },
}

 client = new Client({
checkUpdate: false,
shards: 1,
});
 client1 = new Client({
 checkUpdate: false,
 shards: 1,
});
 client2 = new Client({
 checkUpdate: false,
 shards: 1,
});
 client3 = new Client({
 checkUpdate: false,
 shards: 1,
});
	client4 = new Client({
	checkUpdate: false,
	shards: 1,
	});
 client5 = new Client({
checkUpdate: false,
shards: 1,
});
client6 = new Client({
checkUpdate: false,
shards: 1,
});
client7 = new Client({
checkUpdate: false,
shards: 1,
});
client8 = new Client({
checkUpdate: false,
shards: 1,
});
client9 = new Client({
checkUpdate: false,
shards: 1,
});

client.on('ready', async () => {



 const connection =   joinVoiceChannel({
				channelId: "986276840400355349",
				guildId: "681797849926860810",
				adapterCreator: client.guilds.cache.get(guildId).voiceAdapterCreator,
				selfDeaf: false,
});

connection.on(VoiceConnectionStatus.Ready, async () => {


		console.log(`${client.user.username} est en ligne!`);

});

		});





		client.login(process.env.RINA);
		client1.login(process.env.MASHA);
		client2.login(process.env.LEA);
		client3.login(process.env.SHAYLA);
		client4.login(process.env.SMOKIE);
		client5.login(process.env.YUKI);
		client6.login(process.env.KEII);
		client7.login(process.env.FROST);
		client8.login(process.env.KREAM);
		client9.login(process.env.CASSIDY);
