const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "681797849926860810";

 client = new Client({
﻿checkUpdate: false,
﻿});
 client1 = new Client({
﻿checkUpdate: false,
﻿});
 client2 = new Client({
﻿checkUpdate: false,
﻿});
 client3 = new Client({
﻿checkUpdate: false,
﻿});
 client4 = new Client({
﻿checkUpdate: false,
﻿});
client5 = new Client({
﻿checkUpdate: false,
﻿});
client6 = new Client({
﻿checkUpdate: false,
﻿});
client7 = new Client({
﻿checkUpdate: false,
﻿});
client8 = new Client({
﻿checkUpdate: false,
﻿});
client9 = new Client({
﻿checkUpdate: false,
﻿});
client10 = new Client({
﻿checkUpdate: false,
﻿});

client.on('ready', async () => {
    


 const connection =   joinVoiceChannel({
        channelId: "1108853251023052954",
        guildId: "1108853250532323490",
        adapterCreator: client.guilds.cache.get(guildid).voiceAdapterCreator,
        selfDeaf: false,
});

connection.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} est en ligne!`);

});

    });



 
  
client.login(process.env.Rina);
client1.login(process.env.Masha);
client2.login(process.env.Impo);
client3.login(process.env.Sasha);
client4.login(process.env.Krime);
client5.login(process.env.Himeji);
client6.login(process.env.Assia);
client7.login(process.env.Frost);
client8.login(process.env.Rosie);
client9.login(process.env.Enora);
client10.login(process.env.Keii);
 







