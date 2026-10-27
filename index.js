const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bankai Bot is Live!'));
app.listen(3000, () => console.log('Web server is running'));

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
});

client.on('ready', () => { 
  console.log(`Bankai ${client.user.tag} is ready!`);
});

client.on('messageCreate', m => {
  if(m.author.bot) return;
  if(m.content == '!bankai') m.reply('🔥 بانكاي مفعل! البوت شغال تمام يا سعد!');
  if(m.content == '!ping') m.reply(`Ping: ${client.ws.ping}ms`);
});

client.login(process.env.TOKEN);
