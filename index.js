const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');


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



 
  
client.login(NDk5NDQ3NDU2Njc4MDE5MDcy.O8cy_wZ.1JHDQJDMTf6nMG5lT3f4nopdPEs);

 







