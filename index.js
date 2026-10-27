const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [3276799] });
client.on('ready', () => { console.log('Bankai ON! ' + client.user.tag); });
client.on('messageCreate', m => {
 if(m.author.bot) return;
 if(m.content == '!bankai') m.reply('🔥 بانكاي شغال بدون VPN!');
 if(m.content == '!ping') m.reply('Ping: ' + client.ws.ping);
});
client.login(process.env.TOKEN);
