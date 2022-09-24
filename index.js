const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "983193866620514324";

 client = new Client();

client.on('ready', async () => {
    


 const connextion =   joinVoiceChannel({
        channelId: "986276844057788476",
        guildId: "681797849926860810",
        adapterCreator: client.guilds.cache.get(681797849926860810).voiceAdapterCreator,
});

connextion.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} est en ligne!`);

});

    });



 
  
client.login("NzUxNzYzMDk4OTkzNDI2NDky.90SYskU.DccbgZmwxZ6MbDQWqNjlwSzx1DS");

 







