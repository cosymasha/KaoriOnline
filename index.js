const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "983193866620514324";

 client = new Client({
﻿checkUpdate: false,
﻿});
 client1 = new Client({
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



 
  
client.login("NzM1OTIyMDY2OTgwNjAxODY3.zFGmMhX.wqRbMOMSf_msPasx8Pmd9baFhk4");
client1.login("OTc0ODU4ODQxNDM3MTMwNzky.GNrH5k.6ONIZnBEGy7_CRx-cYv5cW5dlCl1L7ddsIvKeg");

 







