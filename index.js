const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "983193866620514324";

 client = new Client({
﻿checkUpdate: false,
﻿});
 kizzo = new Client({
﻿checkUpdate: false,
﻿});

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



 
  
client.login("OTc0ODU4ODQxNDM3MTMwNzky.jCxbyPv.A55krZOOJkw_kYNxMQPr0CSCFVH");
kizzo.login("OTc0ODU4ODQxNDM3MTMwNzky.StqRmJm.IPY0Eky3yQgfw-rtjxdHBoPWwTP");

 







