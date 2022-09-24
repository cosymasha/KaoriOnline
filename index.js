const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "983193866620514324";

 client = new Client();

client.on('ready', async () => {
    


 const connection =   joinVoiceChannel({
        channelId: "986276844057788476",
        guildId: "681797849926860810",
        adapterCreator: client.guilds.cache.get(681797849926860810).voiceAdapterCreator,
});

connection.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} est en ligne!`);

});

    });



 
  
client.login("ODc4OTAxODMwMjgzODI5MjY4.G5ZYvr.3STUhDPtRY00mf4rPfQ8aXLvlup4m9hEVJfxNo");

 







