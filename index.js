const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "681797849926860810";

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
				adapterCreator: client.guilds.cache.get(guildid).voiceAdapterCreator,
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
